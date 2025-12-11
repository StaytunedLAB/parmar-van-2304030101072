function sayHi () {
    alert('Hello');
}

setTimeout(sayHi, 1000);


function sayHi (phrase, who) {
    alert(phrase + ', ' + who);
}

setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John

setTimeout(() => alert('Hello'), 1000);


// repeat with the interval of 2 seconds
let timerId = setInterval(() => alert('tick'), 2000);

// after 5 seconds stop
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);


// Zero delay setTimeout
setTimeout(() => alert("World"));

alert("Hello");