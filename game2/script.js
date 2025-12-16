// Simple Rock Paper Scissors game
(() => {
  const choices = ['rock','paper','scissors'];
  const emoji = {rock: '✊', paper: '✋', scissors: '✌️'};
  const playerScoreEl = document.getElementById('player-score');
  const computerScoreEl = document.getElementById('computer-score');
  const resultEl = document.getElementById('result');
  const roundInfoEl = resultEl.querySelector('.round-info');
  const choiceButtons = document.querySelectorAll('.choice');
  const resetBtn = document.getElementById('reset');

  let playerScore = 0;
  let computerScore = 0;

  function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
  }

  // returns 'win' | 'lose' | 'draw'
  function decide(player, comp) {
    if (player === comp) return 'draw';
    if (
      (player === 'rock' && comp === 'scissors') ||
      (player === 'paper' && comp === 'rock') ||
      (player === 'scissors' && comp === 'paper')
    ) return 'win';
    return 'lose';
  }

  function updateScores() {
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
  }

  function clearActive() {
    choiceButtons.forEach(b => b.classList.remove('active','win','lose','draw'));
  }

  function showResult(player, comp, outcome) {
    clearActive();

    const playerBtn = document.querySelector(`.choice[data-choice="${player}"]`);
    const compEmoji = emoji[comp];
    playerBtn.classList.add('active', outcome === 'win' ? 'win' : outcome === 'lose' ? 'lose' : 'draw');

    const msg = outcome === 'win' ? 'You win!' : outcome === 'lose' ? 'You lose.' : "It's a draw.";
    resultEl.querySelector('.message').textContent = `${msg} — You: ${emoji[player]} vs Computer: ${compEmoji}`;
    roundInfoEl.textContent = outcome === 'win' ? `${player} beats ${comp}` : outcome === 'lose' ? `${comp} beats ${player}` : `${player} equals ${comp}`;
  }

  function play(playerPick) {
    const comp = computerChoice();
    const outcome = decide(playerPick, comp);

    if (outcome === 'win') playerScore += 1;
    else if (outcome === 'lose') computerScore += 1;

    updateScores();
    showResult(playerPick, comp, outcome);
  }

  // Attach listeners to buttons
  choiceButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const choice = btn.dataset.choice;
      play(choice);
    });
  });

  // Reset
  resetBtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    updateScores();
    clearActive();
    resultEl.querySelector('.message').textContent = 'Make your choice';
    roundInfoEl.textContent = '';
  });

  // Keyboard shortcuts: R, P, S
  window.addEventListener('keydown', e => {
    const key = e.key.toLowerCase();
    if (key === 'r') play('rock');
    if (key === 'p') play('paper');
    if (key === 's') play('scissors');
  });

  // initialize
  updateScores();
})();