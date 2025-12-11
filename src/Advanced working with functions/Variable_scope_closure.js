// Code blocks
{
    // do some job with local variables that should not be seen outside

    let message = "Hello"; // only visible in this block

    alert(message); // Hello
}

alert(message); // Error: message is not defined



{
    // show message
    let message = "Hello";
    alert(message);
}

{
    // show another message
    let message = "Goodbye";
    alert(message);
}

for (let i = 0; i < 3; i++) {
    // the variable i is only visible inside this for
    alert(i); // 0, then 1, then 2
}


// Nested functions
function sayHiBye (firstName, lastName) {

    // helper nested function to use below
    function getFullName () {
        return firstName + " " + lastName;
    }

    alert("Hello, " + getFullName());
    alert("Bye, " + getFullName());

}


// Lexical Environment
let pharse = "Hello";

function say(name) {
    alert(`${pharse}, ${name}`);
}
say("Utkarsh"); // Hello, Utkarsh



// Garbage collection
let value = "Surprise!";

function f () {
    let value = "the closest value";

    function g () {
        debugger; // in console: type alert(value); Surprise!
    }

    return g;
}

let g = f();
g();
