//More ways to write a number;

let billion = 1000000000;
// We also can use underscore _ as the separator:
let billions = 1_000_000_000;
alert(7.3e9); // 7.3 billion, same as 7300000000
alert(1e3 === 1 * 1000)// true

let mcs = 1e-6;
alert(mcs); // 0.000001

// -3 divides by 1 with 3 zeroes
1e-3 === 1 / 1000; // 0.001

// -6 divides by 1 with 6 zeroes
1.23e-6 === 1.23 / 1000000; // 0.00000123

// an example with a bigger number
1234e-2 === 1234 / 100;

//Hex, binary and octal numbers
alert(0xff); // 255
alert(0xFF); // 255 (the same, case doesn't matter)

let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

alert(a == b); // true, the same number 255 at both sides

// toString(base) 
let num = 255;

alert(num.toString(16));  // ff
alert(num.toString(2));   // 11111111
alert(123456..toString(36)); // 2n9c


// Rounding 
let num1 = 1.23456;
alert(Math.round(num1 * 100) / 100);

let num2 = 12.34;
alert(num2.toFixed(1)); 

let num3 = 12.34;
alert(num3.toFixed(5));

// Imprecise calculations
// alert(1e500); // Infinity

alert(0.1 + 0.2 == 0.3); // false
alert(0.1 + 0.2); // 0.30000000000000004
alert(0.2.toString(2)); 


let sum1 = 0.1 + 0.2;
alert(sum1.toFixed(2)); // "0.30"
let sum2 = 0.1 + 0.2;
alert(+sum2.toFixed(2)); // 0.3


//Tests: isFinite and isNaN
alert(isNaN(NaN)); // true
alert(isNaN("str")); // true

alert(NaN === NaN);

alert(isFinite("15")); // true
alert(isFinite("str")); // false, because a special value: NaN
alert(isFinite(Infinity)); // false, because a special value: Infinity


let num4 = +prompt("Enter a number", '');

// will be true unless you enter Infinity, -Infinity or not a number
alert(isFinite(num4));

//Number.isNaN and Number.isFinite
alert(Number.isNaN(NaN)); // true
alert(Number.isNaN("str" / 2)); // true

// Note the difference:
alert(Number.isNaN("str")); 
alert(isNaN("str"));


alert(Number.isFinite(123)); // true
alert(Number.isFinite(Infinity)); // false
alert(Number.isFinite(2 / 0)); // false

// Note the difference:
alert(Number.isFinite("123")); // false, because "123" belongs to the string type, not the number type
alert(isFinite("123"));

// parseInt and parseFloat
alert(parseInt('100px')); // 100
alert(parseFloat('12.5em')); // 12.5

alert(parseInt('12.3')); // 12, only the integer part is returned
alert(parseFloat('12.3.4')); // 12.3, the second point stops the reading

// Other math functions
alert(Math.random()); // 0.1234567894322
alert(Math.max(3, 5, -10, 0, 1)); // 5
alert(Math.min(1, 2)); // 1
alert(Math.pow(2, 10)); 