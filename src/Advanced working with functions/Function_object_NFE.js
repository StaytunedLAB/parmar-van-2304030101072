// The “name” property

function sayHi () {
    alert("Hi");
}

alert(sayHi.name); // sayHi


// Named Function Expression
function f (sayHi = function () { }) {
    alert(sayHi.name); // sayHi (works!)
}

f();


let user = {

    sayHi () {
        // ...
    },

    sayBye: function () {
        // ...
    }

};

alert(user.sayHi.name); // sayHi
alert(user.sayBye.name); // sayBye


// The “length” property
function f1 (a) { }
function f2 (a, b) { }
function many (a, b, ...more) { }

alert(f1.length); // 1
alert(f2.length); // 2
alert(many.length); // 2



function ask (question, ...handlers) {
    let isYes = confirm(question);

    for (let handler of handlers) {
        if (handler.length == 0) {
            if (isYes) handler();
        } else {
            handler(isYes);
        }
    }

}

ask("Question?", () => alert('You said yes'), result => alert(result));


// Custom properties
function sayHi () {
    alert("Hi");


    sayHi.counter++;
}
sayHi.counter = 0;

sayHi();
sayHi();

alert(`Called ${sayHi.counter} times`);



// Named Function Expression
let sayHi = function func (who) {
    if (who) {
        alert(`Hello, ${who}`);
    } else {
        func("Guest"); // use func to re-call itself
    }
};



let sayHi = function func (who) {
    if (who) {
        alert(`Hello, ${who}`);
    } else {
        func("Guest"); // Now all fine
    }
};

let welcome = sayHi;
sayHi = null;

welcome();