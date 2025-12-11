let animal = {
    eats: true,
    walk() {
        alert("Animal walk");
    }
};


let rebiit = {
    jumps: true,
    __proto__: animal
};


let longEar = {
    earLength: 10,
    __proto__: rebiit
};

rebiit.walk(); // Animal walk


// Writing doesn’t use prototype
let anml = {
    eats: true,
    walk() {

    }
}
let rabbit = {
    __proto__: anml
}

rabbit.walk = function() {
    alert("Rabbit! Bounce-bounce!");
};

rabbit.walk(); // Rabbit! Bounce-bounce!



let user = {
    name: "tony",
    surname: "stark",

    set fullName(value) {
        [this.name, this.surname] = value.split (" ");
    },

    get fullName() {
        return `${this.name} ${this.surname}`;
    }
};


let admin = {
    __proto__: user,
    isAdmin: true
};


alert(admin.fullName); // tony stark

admin.fullName = "peter parker";
alert(admin.fullName); // peter parker
alert(user.fullName); // tony



// The value of “this”
let creature = {
    walk(){
        if(!this.isSleeping){
            alert(`I walk`);
        }
    },
    sleep(){
        this.isSleeping = true;
    }
};

let dog = {
    name: "pluto",
    __proto__: creature
};

dog.sleep() 

alert(dog.isSleeping); 
alert(creature.isSleeping);


// for…in loop 

let animals = {
    eats: true
};

let rabbit2 = {
    jumps: true,
    __proto__: animals
};  

alert(Object.keys(rabbit2)); // jumps

for(let prop in rabbit2) alert(prop);