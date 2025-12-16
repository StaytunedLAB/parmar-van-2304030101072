// The “while” loop

let i = 0;
while (i < 5) { // shows 0, then 1, then 2
    alert(i);
    i++;
}

let j = 3;
while (i) {
    alert(j);
    j--;
}

let k = 3;
while (k) alert(k--);



// The “do while” loop
let l = 0;
do {
    alert(l);
    l++;
} while (l < 3);


// The “for” loop
for (let i = 0; i < 3; i++) {
    alert(i);
}

// Inline variable declaration
for (let i = 0; i < 3; i++) {
    alert(i);
}
alert(i);


// Skipping parts
let c = 0;

for (; c < 3; c++) {
    alert(c);
}

// Breaking the loop
let sum = 0;
while (true) {
    let value = +prompt("Enter a number", '');
    if (!value) break;
    sum += value;
}
alert('Sum: ' + sum);

// Continue to the next iteration
for (let n = 0; n < 10; n++) {
    if (n % 2 == 0) continue;
    alert(n);
}

for (let i = 0; i < 10; i++) {

    if (i % 2) {
        alert(i);
    }
}

// Labels for break/continue
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = prompt(`Value at coords (${i},${j})`, '');
    }
}

alert('Done!');