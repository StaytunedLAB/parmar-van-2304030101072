//Optional chaining '?.'
//The optional chaining?.stops the evaluation if the value before?.is undefined or null and returns undefined.
//The “non-existing property” problem
let user = {}; // a user without "address" property

alert(user.address.street); // Error!


let user2 = {};

alert(user2.address ? user2.address.street : undefined);

let html = document.querySelector('.elem') ? document.querySelector('.elem').innerHTML : null;
console.log(html);

let user3 = {};
alert(user3.address && user3.address.street && user3.address.street.name);

let user4 = null;

alert(user4?.address); // undefined
alert(user4?.address.street); // undefined


// Short-circuiting
let user5 = null;
let x = 0;

user5?.sayHi(x++); // no "user", so the execution doesn't reach sayHi call and x++

alert(x); // 0, value not incremented


 //Other variants: ?.(), ?.[]
let userAdmin = {
    admin () {
        alert("I am admin");
    }
};

let userGuest = {};

userAdmin.admin?.(); // I am admin

userGuest.admin?.(); // nothing happens (no such method)


let key = "firstName";

let user7 = {
    firstName: "John"
};

let user8 = null;

alert(user1?.[key]); // John
alert(user2?.[key]); // undefined

delete user6?.name; // delete user.name if user exists