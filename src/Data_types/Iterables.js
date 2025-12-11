// Symbol.iterator

let range = {
    from: 1,
    to: 5
};

range[Symbol.iterator] = function () {
    return {
        current: this.from,
        last: this.to,
    
    next() {
        if (this.current <= this.lasrt) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }   
    }
    };
};

for (let num of range) {
    alert(num); // 1, then 2, 3, 4, 5
}

// String is iterable
for (let char of "hello") {
    alert(char); // h, e, l, l, o
};

// Calling an iterator explicitly
let str = "welcome";

let iterator = str[Symbol.iterator]();
while (true) {
    let result = iterator.next();
    if (result.done) break;
    alert(result.value); // w, e, l, c, o, m, e
}

// Array.from 
let array = { 
    0: "Hello",
    1: "World",
    length: 2
};
let arr = Array.from(array);
alert(arr.pop()); // World


function slice(str, start, end){
    return Array.from(str).slice(start, end).join('');
}
let stri = "Hello world"; 

alert(slice(stri, 3, 7));

alert(slice(stri, 1, 3));