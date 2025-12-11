// let user = new Object(); // object constructor syntax
// let user = {}; // object literal syntax


// Literals and properties ⬇️
let user = {
    name: "utkarsh",
    age: 21
};
user.isAdmin = true; // adding new property
delete user.age; // deleting property


let user1 = {
    name: "tarun",
    age: 20,
    "likes bikes": true, // multiword property name must be quoted
};

// this would give a syntax error
// user.likes birds = true;

// Square brackets
let user2 = {};
//  set property
user2["likes Cars"] = true;
console.log(user2);
// get property
console.log((user2["likes birds"])); // undefined
// delete
delete user2["likes Cars"];
console.log(user2);


// Accessing properties with variables
let user3 = {
    name: "John",
    age: 30
};

let keys = prompt("What do you want to know about the user?", "name");

// access by variable
alert(user3[keys]);

// Computed properties
let fruit = prompt("which fruit to buy?", "apple");

let bag = {
    [fruit]: 5,
};
alert(bag.apple);

//Property value shorthand
function makeUser (name, age) {
    return {
        name: name,
        age: age,
    };
}
let user4 = makeUser("jay", 20);
alert(user4.name);


//Property names limitations
// these properties are all right
let obj1 = {
    for: 1,
    let: 2,
    return: 3
};

alert(obj1.for + obj1.let + obj1.return);


let obj2 = {
    0: "test"
};

alert(obj2["0"]);
alert(obj2[0]);

// Property existence test, “in” operator
let user = {};
alert(user.noSuchProperty === undefined);

let user = {
    name: "jhon",
    age: 25,
};

alert("age" in user);
alert("blabla" in user);


let user = { age: 30 };

let key = "age";
alert(key in user);

let obj = {
    test: undefined
};
alert(obj.test);

alert("test" in obj);

//The "for..in" loop
let user = {
    name: "utkarsh",
    age: 21,
    isCoder: true
};

for (let key in user) {
    alert(key);
    alert(user[key]);
};

//Ordered like an object
let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "India"
};

for (let code in codes) {
    alert(code); // 1, 41, 44, 49
}

let mcodes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    // ..,
    "+1": "USA"
};

for (let code in mcodes) {
    alert(+code); // 49, 41, 44, 1
}

// Object references and copyin
let message = "hello";
let phrase = message;

let user = { name: "John" };

let admin1 = user; // copy the reference


let usr = { name: "tarun" };

let admin2 = usr;

admin2.name = "utkarsh";

alert(usr.name);

//Comparison by reference
let a = {};
let b = a;

alert(a == b);
alert(a === b);


let c = {};
let d = {}; // two independent objects

alert(c == d);


// Const objects can be modified
const user = {
    name: "utkarsh"
};

user.name = "nikunj"; // (*)

alert(user.name);


//Cloning and merging, Object.assign
let user = {
    name: "John",
    age: 30
};
let clone = {};
for (let key in user) {
    clone[key] = user[key];
}

clone.name = "Pete";
alert(user.name);

// We can also use the method Object.assign
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

Object.assign(user, permissions1, permissions2);

alert(user.name);
alert(user.canView);
alert(user.canEdit);

// If the copied property name already exists, it gets overwritten:
let user = { name: "John" };

Object.assign(user, { name: "Pete" });

alert(user.name); // now user = { name: "Pete" }

// We also can use Object.assign to perform a simple object cloning:
let user = {
    name: "John",
    age: 30
};

let clone = Object.assign({}, user);

alert(clone.name); // John
alert(clone.age); // 30



//Nested cloning
let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

let clone = Object.assign({}, user);
alert(user.sizes === clone.sizes);

// user and clone share sizes
user.sizes.width = 60;
alert(clone.sizes.width);


// structuredClone
let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

let clone = structuredClone(user);

alert(user.sizes === clone.sizes);

// user and clone are totally unrelated now
user.sizes.width = 60;
alert(clone.sizes.width); 