// Getters and setters

let user = {
    name: "John",
    surname: "Smith",

    get fullName () {
        return `${this.name} ${this.surname}`;
    }
};

alert(user.fullName); // John Smith


let user2 = {
    name: "John",
    surname: "Smith",

    get fullName () {
        return `${this.name} ${this.surname}`;
    },

    set fullName (value) {
        [this.name, this.surname] = value.split(" ");
    }
};

// set fullName is executed with the given value.
user2.fullName = "Alice Cooper";

alert(user2.name); // Alice
alert(user2.surname); // Cooper



// Accessor descriptors
let user3 = {
    name: "utkarsh",
    surname: "prajapati",
};

ObjectdefineProperty(user3, "fullName", {
    get () {
        return `${this.name} ${this.surname}`;
    },

    set (value) {
        [this.name, this.surname] = value.split(" ");
    }
});

alert(user3.fullName); // utkarsh prajapati

for(let key in user3) alert(key);


// Smarter getters/setters
let user4 = { 
    get name(){
        return this._name;
    },

    set name(value){
        if(value.length < 4){
            alert("Name is too short.");
            return;
        }
        this._name = value;
    }
};

user4.name = "Pete";
alert(user4.name); // Pete

user4.name = ""; // Name is too short.


// Using for compatibility
function User(name, birthday) {
    this.name  = name;
    this.birthday = birthday;

Object.defineProperties(this, "age", {
    get(){
        let todayYear = new Date().getFullYear();
        return todayYear - this.birthday.getFullYear();
    }
});
}

let tony = new User("Tony", new Date(1990, 6, 15));

alert(tony.birthday);
alert(tony.age); // age is calculated