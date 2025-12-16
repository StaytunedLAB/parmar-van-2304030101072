// Simple Snake Game
// Save as script.js and open index.html in a browser.

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const scoreEl = document.getElementById('score');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const restartBtn = document.getElementById('restartBtn');

const TILE = 20;                // size of a tile in pixels
const COLS = canvas.width / TILE;
const ROWS = canvas.height / TILE;

let snake, dir, nextDir, food, gameLoopId, speed, running, score;

function reset() {
  snake = [
    {x: Math.floor(COLS/2), y: Math.floor(ROWS/2)},
    {x: Math.floor(COLS/2)-1, y: Math.floor(ROWS/2)},
    {x: Math.floor(COLS/2)-2, y: Math.floor(ROWS/2)}
  ];
  dir = {x: 1, y: 0};            // moving right initially
  nextDir = {...dir};
  spawnFood();
  speed = 120;                   // milliseconds per step
  score = 0;
  running = false;
  updateScore();
  draw();
}

function spawnFood() {
  // place food at random free cell
  while (true) {
    const pos = {x: rand(0, COLS-1), y: rand(0, ROWS-1)};
    if (!snake.some(s => s.x === pos.x && s.y === pos.y)) {
      food = pos;
      return;
    }
  }
}

function rand(a,b) { return Math.floor(Math.random()*(b-a+1))+a; }

function drawCell(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x*TILE+1, y*TILE+1, TILE-2, TILE-2);
}

function draw() {
  // background
  ctx.fillStyle = '#071029';
  ctx.fillRect(0,0,canvas.width,canvas.height);

  // food
  drawCell(food.x, food.y, '#ff5a5f');

  // snake
  for (let i=0;i<snake.length;i++) {
    const s = snake[i];
    const color = i===0 ? '#22c55e' : '#1f8f46';
    drawCell(s.x, s.y, color);
  }
}

function update() {
  // update direction (prevents reversing)
  if (Math.abs(nextDir.x) !== Math.abs(dir.x) || Math.abs(nextDir.y) !== Math.abs(dir.y)) {
    dir = nextDir;
  }

  const head = {x: snake[0].x + dir.x, y: snake[0].y + dir.y};

  // wall collision -> game over
  if (head.x < 0 || head.x >= COLS || head.y < 0 || head.y >= ROWS) {
    return gameOver();
  }

  // self collision
  if (snake.some(s => s.x === head.x && s.y === head.y)) {
    return gameOver();
  }

  snake.unshift(head);

  // eat food
  if (head.x === food.x && head.y === food.y) {
    score += 10;
    updateScore();
    spawnFood();
    // speed up a bit every 5 food
    if (score % 50 === 0 && speed > 40) speed -= 8;
  } else {
    snake.pop();
  }

  draw();
}

function gameLoop() {
  update();
}

function start() {
  if (running) return;
  running = true;
  if (gameLoopId) clearInterval(gameLoopId);
  gameLoopId = setInterval(gameLoop, speed);
}

function pause() {
  running = false;
  if (gameLoopId) clearInterval(gameLoopId);
  gameLoopId = null;
}

function restart() {
  pause();
  reset();
  start();
}

function gameOver() {
  pause();
  ctx.fillStyle = 'rgba(0,0,0,0.5)';
  ctx.fillRect(0, canvas.height/2 - 30, canvas.width, 60);
  ctx.fillStyle = '#fff';
  ctx.font = '20px system-ui';
  ctx.textAlign = 'center';
  ctx.fillText('Game Over — Score: ' + score, canvas.width/2, canvas.height/2 + 8);
}

// controls
window.addEventListener('keydown', e => {
  const key = e.key;
  if (key === 'ArrowUp' || key === 'w' || key === 'W') {
    nextDir = {x:0, y:-1};
  } else if (key === 'ArrowDown' || key === 's' || key === 'S') {
    nextDir = {x:0, y:1};
  } else if (key === 'ArrowLeft' || key === 'a' || key === 'A') {
    nextDir = {x:-1, y:0};
  } else if (key === 'ArrowRight' || key === 'd' || key === 'D') {
    nextDir = {x:1, y:0};
  } else if (key === ' '){
    // space to pause / resume
    if (running) pause(); else start();
  }
});

// buttons
startBtn.addEventListener('click', start);
pauseBtn.addEventListener('click', () => {
  if (running) pause(); else start();
});
restartBtn.addEventListener('click', restart);

function updateScore() {
  scoreEl.textContent = 'Score: ' + score;
}

// initialize
reset();

// Keep interval aligned with speed changes
// When speed changes we need to restart interval with new delay
const originalUpdate = update;
update = function() {
  originalUpdate();
  if (running) {
    // clear and re-set interval if speed changed
    if (gameLoopId) {
      clearInterval(gameLoopId);
      gameLoopId = setInterval(gameLoop, speed);
    }
  }
};
