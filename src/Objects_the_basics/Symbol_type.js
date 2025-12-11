let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 == id2);


//Symbols don’t auto-convert to a string
let id = Symbol("id");
alert(id); // TypeError: Cannot convert a Symbol value to a string

let id3 = Symbol("id");
alert(id3.toString()); // Symbol(id)
alert(id3.description); // id



//  “Hidden” properties
let user = { // belongs to another code
    name: "John"
};

let id4 = Symbol("id");

user[id4] = 1;

alert(user[id4]);


// Symbols in an object literal
let id5= Symbol("id");

let user1 = {
    name: "John",
    [id5]: 123
};
alert(user1[id5]); // 123

// Symbols are skipped by for…in
//Symbolic properties do not participate in for..in loop.
let id6 = Symbol("id");
let user4 = {
    name: "John",
    age: 30,
    [id6]: 123
};

for (let key in user4) alert(key); // name, age (no symbols)

// the direct access by the symbol works
alert("Direct: " + user4[id6]); // Direct: 123


//Global symbols
// read from the global registry
let id7 = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");

// the same symbol
alert(id7 === idAgain); // true

//Symbol.keyFor
// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name by symbol
alert(Symbol.keyFor(sym)); // name
alert(Symbol.keyFor(sym2)); // id



let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert(Symbol.keyFor(globalSymbol)); // name, global symbol
alert(Symbol.keyFor(localSymbol)); // undefined, not global

alert(localSymbol.description); // name