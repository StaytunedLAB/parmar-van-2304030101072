let obj = {};

alert(obj.__proto__ === Object.prototype); // true
alert(obj.toString === obj.__proto__.toString); // true
alert(obj.toString === Object.prototype.toString); // true


let arr = [1, 2, 3];

alert(arr.__proto__ === Array.prototype); // true
alert(arr.__proto__.__proto__ === Object.prototype); // true
alert(arr.__proto__.__proto__.__proto__); // null



// Changing native prototypes
String.prototype.show = function () {
    alert(this);
};

"utkarsh".show(); // utkarsh



if(!String.prototype.repeat){
    String.prototype.repeat = function (n){
        return new Array(n + 1).join(this);
    };
}

alert("hii! ".repeat(3)); // hii! hii! hii!


// Borrowing from prototypes
let obj2 = {
    0: "Hello",
    1: "world!",
    length: 2,
};
obj.join = Array.prototype.join;

alert(obj2.join(",")); // Hello,world!