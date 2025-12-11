// Method examples

let user = {
    name: "Jhon doe",
    age: 26
};

user.sayHi = function(){
    alert("hello");
};

user.sayHi();


// pre-declared function as a method
let user = {
};

// first, declare
function sayHi () {
    alert("Hello!");
}
// then add as a method
user.sayHi = sayHi;

user.sayHi();


//  Method shorthand

user = {
    sayHi: function() {
    alert("Hello");
    }
};

// method shorthand looks better
user = {
    sayHi() {
        alert("Hello");
    }
}
user.sayHi();


//“this” in methods
let user1 = {
    name: "utkarsh",
    age: 21,

    sayHi() {
        // “this” in methods
        alert(this.name);
    }
};
user1.sayHi();

////“this” is not bound

let user2 = {name: "utkarsh"};
let admin = { name: "Admin"};

function sayHi() { 
    alert(this.name);
}

user2.f = sayHi;
admin.f = sayHi;

user2.f(); // utkarsh  (this == user2)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (dot or square brackets doesn’t matter)

////Arrow functions have no “this”

let user3 = {
    firstName: "Utkarsh",
    sayHi() {  
        let arrow = () => alert(this.firstName);
        arrow();
    }   
};

user3.sayHi(); // Utkarsh