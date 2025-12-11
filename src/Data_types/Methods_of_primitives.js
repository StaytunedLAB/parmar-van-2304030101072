let utk = {
    name: "Utkarsh",
    sayHi: function() {
        alert("Hello buddy");
    }
};

utk.sayHi(); // Hello buddy

let str = "Hello";
alert(str.toUpperCase()); 

let n = 1.23456;
alert(n.toFixed(2));

alert(typeof 0); // "number"

alert(typeof new Number(0)); // "object"

let zero = new Number(0);

if (zero) { // zero is true, because it's an object
    alert("zero is truthy!?!");
}