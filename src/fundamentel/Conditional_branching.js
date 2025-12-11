let year = prompt('In which year was born', '');
if (year == 2004) alert('You are right!');

// Boolean conversion
let cond = (year == 2004); 


// The “else” clause

let age = prompt('How old are you?', '');
if (age == 21) {
    alert('you are right');
} else {
    alert('you are wrong');
}


// Several conditions: “else if”
let marks = prompt('Enter your marks', '');
if (marks >= 90) {
    alert('A grade');
} else if (marks >= 75) {
    alert('B grade');
} else if (marks >= 50) {
    alert('C grade');
} else {
    alert('Fail');
}

// Tasks 
if ("0") {
    alert( 'Hello' );
}

let a = 1;
let b = 2;
let result = (a + b < 4) ? 'Below' : 'Over';
console.log(result);