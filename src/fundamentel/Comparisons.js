// Boolean is the result
// true - yes
// false - no


// alert(2 > 1);  // true (correct)
// alert(2 == 1); // false (wrong)
// alert(2 != 1); // true (correct)

// let result = 5 > 4; 
// alert(result); // true

// String comparison
alert('Z' > 'a'); // false
alert('Glow' > 'Glee'); // true
alert('Bee' > 'Be'); // true


// Comparison of different types 
alert('2' > 1); // true, string '2' becomes a number 2
alert('01' == 1); // true, string '01' becomes a number 1

// boolean true-false
alert(true == 1); // true
alert(false == 0); // true

// A funny consequence 
let a = 0;
alert(Boolean(a)); // false

let b = "0";
alert(Boolean(b)); // true

alert(a == b); // true!

// Strict equality
alert(0 === false); // false, because the types are different
alert(null === undefined); // false



// Strange result: null vs 0
alert(null > 0);  // (1) false
alert(null == 0); // (2) false
alert(null >= 0); // (3) true