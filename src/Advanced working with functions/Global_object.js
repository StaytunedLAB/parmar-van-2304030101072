alert("hello");

window.alert("Hello");

// Using for polyfills
if (!window.Promise) {
    alert("Your browser is really old!");
}


window.currentUser = {
    name: "John"
};

alert(currentUser.name);  // John

alert(window.currentUser.name); // John