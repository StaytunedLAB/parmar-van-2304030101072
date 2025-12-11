// Property flags

let user = {
    name: "John"
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

alert(JSON.stringify(descriptor, null, 2));


//Non-writable
let user1 = {
    name: "John"
};

Object.defineProperty(user1, "name", {
    writable: false
});

user1.name = "Pete"; 

// Non - enumerable
let use2 = {
    name: "John",
    toString () {
        return this.name;
    }
};

// By default, both our properties are listed:
for (let key in user2) alert(key);


let user3 = {
    name: "John",
    toString () {
        return this.name;
    }
};

Object.defineProperty(user3, "toString", {
    enumerable: false
});

// Now our toString disappears:
for (let key in user3) alert(key); 



// Non-configurable
let descriptorr = Object.getOwnPropertyDescriptor(Math, 'PI');

alert(JSON.stringify(descriptorr, null, 2));

Object.defineProperty(Math, "PI", { writable: true });