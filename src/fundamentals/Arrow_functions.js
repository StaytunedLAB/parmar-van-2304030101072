// let sum = (a, b) => a + b;
// alert(sum(1, 2));


// let sayHi = () => alert("Hello!");
// sayHi();

// let double = n => n * 2;
// alert(double(3));



let age = prompt("What is your age?", 18);
let welcome = (age < 18) ? () => alert('Hello!') : () => alert("Greetings!");

welcome();

//Multiline arrow functions
let sum = (a, b) => {  
    let result = a + b;
    return result; 
};

alert(sum(1, 2)); 

function ask (question, yes, no) {
    if (confirm(question)) yes();
    else no();
}
ask(
    "Do you agree?",
    function () { alert("You agreed."); },
    function () { alert("You canceled the execution."); }
);