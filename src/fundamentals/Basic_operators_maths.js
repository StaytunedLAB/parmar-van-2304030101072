// unary
let a = 10;

A = -a;
console.log(A);


// binary
let b = 5; c = 3;
B = b + c;
console.log(B);

// Maths
let x = 10; y = 3;
console.log(x + y);  // Addition
console.log(x - y); // Subtraction          
console.log(x * y); // Multiplication
console.log(x / y); // Division
console.log(x % y); // Modulus
console.log(x ** y); // Exponentiation

// String concatenation with binary +

let name = "raj" + " kumar";
console.log(name);

alert('1' + 2); // "12"
alert(2 + '1'); // "21"
alert(2 + 3 + '1'); // "51"


// Numeric conversion, unary +
// No effect on numbers
let z = 5;
console.log(+z); // 5

let m = -3;
console.log(+m); // -3

// Converts non-numbers
alert(+true); // 1
alert(+"");   // 0

let apples = "2";
let oranges = "3";

alert(apples + oranges); // "23"
alert(+apples + +oranges); // 5

// Assignment

let y = 2 * 2 + 1;

alert(y); // 5

// Assignment = returns a value 
let n = 1;
let p = 2;

let c = 3 - (a = b + 1);
alert(c); // 3
alert(c); // 0

// Chaining assignments
let q, r, s;
q = r = s = 2 + 2;
alert(q); // 4
alert(r); // 4
alert(s); // 4

// Modify-in-place
let g = 2;
g += 3; // g = g + 3
alert(g); // 5


// Increment/decrement
let counter = 2;
counter++; // postfix form
alert(counter); // 3
++counter; //prefix form
alert(counter); // 3

let counter2 = 4;
counter2--; // postfix form
--counter2; //prefix form
alert(counter2); // 3


// Increment/decrement among other operators ++/--
let cntr = 1;
alert(2 * ++cntr); // 4

let cnt = 1;
alert(2 * cnt++); // 2, because cnt++ returns the "old" value