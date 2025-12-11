// Veriable declaration and initialization

// let in javaScript ⬇️

let name = "Maulik Thakor";
console.log("Name:", name);

let WelcomeMessage = "Welcome to JavaScript Fundamentals!";
alert(WelcomeMessage);

// Multiple variable declaration in one line
// this is generally not recommended for better readability
let user = "Utkarsh", age = 20, country = "India";
console.log("User:", user, "Age:", age, "Country:", country);


let msg;

msg =  "hello";

msg = "world"  // when the values is changed the old data removed from the memory

alert(msg);


// two variables with difrent name but same value
let hello = "Hello World!";

let message;

message = hello;

alert(hello);
alert(message);


// constants in JavaScript ⬇️
// costant variable cannot be reassigned or changed after declaration
const pi = 3.14;
alert(`Value of Pi is, ${pi}`);
const myBirthDate = "27-11-2004";
myBirthDate; // const cannot be reassigned
alert(`My Birth Date is, ${myBirthDate}`);
