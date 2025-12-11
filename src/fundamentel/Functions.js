// Function Declaration
function showMessage () {
    alert('Hello everyone!');
    }

// Calling the function multiple times
function Message () {
    alert('Hello');
}
Message();
Message();

// Local variables 
function showMessage2 () {
    let message = 'Hello, I am JavaScript';
    alert(message);
}
showMessage2();
alert(message); // Error: variable is local to the function

// Outer variables
let user = 'Utkarsh';
function showMessage3 () {
    let message = 'Hello ' + user;
    alert(message);
}
showMessage3();



let userName = 'John';
function showMessage () {
    userName = "Bob"; // (1) changed the outer variable

    let message = 'Hello, ' + userName;
    alert(message);
}
alert(userName); // John before the function call

showMessage();




alert(userName); // Bob, the value was modified by the function


// Parameters
function showMessage (from, text) {
    alert(from + ': ' + text);
}
showMessage('Utkarsh', 'Hello!'); 
showMessage('Alice', "What's up?"); 

// Default values
function showMessage (from, text = "no text given") {
    alert(from + ": " + text);
}
showMessage("Ann");


//  default parameters
function showMessage (text) {
    if (text === undefined) { // if the parameter is missing
        text = 'empty message';
    }
    alert(text);
}
showMessage(); 

// nullish coalescing operator
function showCount (count) {
    // if count is undefined or null, show "unknown"
    alert(count ?? "unknown");
}
showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown


//function with Returning a value
function sum (a, b) {
    return a + b;
}
let result = sum(1, 2);
alert(result);

function checkAge (age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm('Do you have permission from your parents?');
    }
}
let age = prompt('How old are you?', 18);

if (checkAge(age)) {
    alert('Access granted');
} else {
    alert('Access denied');
}

// Function expressions
let sayHi = function() {
    alert("Hello");
};
sayHi();

// Callback functions 
function ask (question, yes, no) {
    if (confirm(question)) yes();
    else no();
}
ask(
    "Do you agree?",
    function () { alert("You agreed."); },
    function () { alert("You canceled the execution."); }
);

// Function Expression vs Function Declaration

// Function Declaration
function sum (a, b) {
    return a + b;
}

// Function Expression
let sum = function (a, b) {
    return a + b;
};