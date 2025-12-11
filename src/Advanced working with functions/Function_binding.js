// Losing “this”

let user = {
    firstName: "John",
    sayHi () {
        alert(`Hello, ${this.firstName}!`);
    }
};

setTimeout(user.sayHi, 1000); // Hello, undefined!

// Solution 1: a wrapper
let user1 = {
    firstName: "John",
    sayHi () {
        alert(`Hello, ${this.firstName}!`);
    }
};

setTimeout(function () {
    user1.sayHi(); // Hello, John!
}, 1000);

// Solution 2: bind
let user2 = {
    firstName: "John"
};

function func () {
    alert(this.firstName);
}

let funcUser = func.bind(user2);
funcUser(); // John


// Partial functions
function mul (a, b) {
    return a * b;
}

let double = mul.bind(null, 2);

alert(double(3)); // = mul(2, 3) = 6
alert(double(4)); // = mul(2, 4) = 8
alert(double(5)); // = mul(2, 5) = 10