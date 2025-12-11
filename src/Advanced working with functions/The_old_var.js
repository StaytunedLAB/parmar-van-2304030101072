var message = "Hi";
alert(message); // Hi

// “var” has no block scope
if (true) {
    var test = true; // use "var" instead of "let"
}

alert(test); // true, the variable lives after if

if (true) {
    let test = true; // use "let"
}

alert(test);




for (var i = 0; i < 10; i++) {
    var one = 1;
    // ...
}

alert(i);   // 10, "i" is visible after loop, it's a global variable
alert(one);


// “var” tolerates redeclarations

var user = "Pete";

var user = "John"; // this "var" does nothing (already declared)
// ...it doesn't trigger an error

alert(user); // John