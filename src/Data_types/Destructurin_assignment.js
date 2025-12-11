// Array destructuring
let fruits = ["Apple", "Banana", "Cherry"];
let [a, b, c] = fruits;
alert(a);

let [firstName, , lastName] = "jhon smith".split(" ");
alert(lastName); // Smith   
alert(firstName); // Jhon

let [title, author] = [
    "The Da Vinci Code",
    "Dan Brown"
];
alert(author); // Dan Brown


// Assign to anything at the left-side
let person = {};
[person.name, person.age] = ["Alice", 25];
alert(person.name); // Alice
alert(person.age); // 25


// Looping with .entries()
let user = {
    name: "utlarsh",
    age: 21
};

for (let [key, value] of Object.entries(user)) {
    alert(`${key} : ${value}`); // name : utkarsh, age : 24
}

// similar code for a Map is simpler, as it’s iterable:
let user1 = new Map();
user1.set("name", "John");
user1.set("age", "30");


for (let [key, value] of user1) {
    alert(`${key}:${value}`); // name:John, then age:30
}

// Swap variables trick
let guset = "jhon";
let admin = "pete";
[guset, admin] = [admin, guset];
alert(`${guset}, ${admin}`); // pete, jhon

// The rest ‘…’
let [name1, name2, ...restNames] = ["Jhon", "Pete", "Alice", "Bob", "Charlie"];
alert(restNames); // Alice, Bob, Charlie
alert(restNames.length); // 3


// default values
let [name = "Guest", surname = "Anonymous"] = ["Julius"];

alert(name);   
alert(surname); 

// runs only prompt for surname
let [userName = prompt('name?'), surname1 = prompt('surname?')] = ["Julius"];

alert(userName);    // Julius (from array)
alert(surName1); // whatever prompt gets

// Object destructuring;
let options = {
    titl: "Menu",
    width: 100,
    height: 200
};

let { titl , width, height } = options;

alert(titl);  // Menu
alert(width);  // 100


// Smart function parameters
// we pass object to function
let optionss = {
    title: "My menu",
    items: ["Item1", "Item2"]
};

// ...and it immediately expands it to variables
function showMenu ({ title = "Untitled", width = 200, height = 100, items = [] }) {
    // title, items – taken from options,
    // width, height – defaults used
    alert(`${title} ${width} ${height}`); // My Menu 200 100
    alert(items); // Item1, Item2
}

showMenu(optionss);