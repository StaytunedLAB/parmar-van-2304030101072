// explicit conversion
let num = Number(obj);

// maths (except binary plus)
let n = +obj; // unary plus
let delta = date1 - date2;

// less/greater comparison
let greater = user1 > user2;


let user = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive] (hint) {
        alert(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
};

// conversions demo:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500


toString / valueOf;
let user1 = { name: "John" };

alert(user1); // [object Object]
alert(user1.valueOf() === user1); // true


let user2 = {
    name: "John",
    money: 1000,

    // for hint="string"
    toString () {
        return `{name: "${this.name}"}`;
    },

    // for hint="number" or "default"
    valueOf () {
        return this.money;
    }

};

alert(user2); // toString -> {name: "John"}
alert(+user2); // valueOf -> 1000
alert(user2 + 500); // valueOf -> 1500


// Further conversions
let obj = {
    toString () {
        return "2";
    }
};
alert(obj * 2);  //4, object converted to primitive "2", then multiplication made it a number

let obj2 = {
    toString () {
        return "2";
    }
};

alert(obj2 + 2); // "22"