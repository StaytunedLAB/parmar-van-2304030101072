// ### *Q1. Simple and Compound Interest Calculator*

javascript
let p = parseFloat(prompt("Enter Principal: "));
let r = parseFloat(prompt("Enter Rate: "));
let t = parseFloat(prompt("Enter Time in years: "));

let SI = (p * r * t) / 100;
let CI = p * (Math.pow((1 + r / 100), t)) - p;

console.log("Simple Interest = " + SI);
console.log("Compound Interest = " + CI);


// Q2. Fibonacci Series*

javascript
let n = parseInt(prompt("Enter number of terms: "));
let a = 0, b = 1;

console.log("Fibonacci Series:");
console.log(a);
console.log(b);

for (let i = 2; i < n; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
}

// Q3. Grade Calculator using Switch Case*

javascript
let marks = parseInt(prompt("Enter marks: "));
let grade;

switch (true) {
    case marks >= 90: grade = "A"; break;
    case marks >= 80: grade = "B"; break;
    case marks >= 70: grade = "C"; break;
    case marks >= 60: grade = "D"; break;
    case marks >= 50: grade = "E"; break;
    default: grade = "F";
}

console.log("Your Grade is: " + grade);


// Q4. Check Leap Year*

javascript
let year = parseInt(prompt("Enter a year: "));

if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0))
    console.log(year + " is a Leap Year");
else
    console.log(year + " is Not a Leap Year");


// Q5. Check Palindrome String*

javascript
let str = prompt("Enter a string:");
let rev = str.split("").reverse().join("");

if (str === rev)
    console.log("Palindrome String");
else
    console.log("Not a Palindrome String");