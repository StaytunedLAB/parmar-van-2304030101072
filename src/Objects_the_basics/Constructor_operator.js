//Constructor function
//They are named with capital letter first.
// They should be executed only with "new" operator.

function User1(name){
    this.name = name;
    this.isAdmin = false;
}
let user = new User1("Utkarsh");

alert(user1.name);
alert(user1.isAdmin);


//new function()
let obj = new function(){
    this.name = "Utkarsh";
    this.age = 21;
};

//Constructor mode test: new.target
function Usr () {
    alert(new.target);
}
Usr();
new Usr();


function User (name) {
    if (!new.target) { // if you run me without new
        return new User(name); // ...I will add new for you
    }

    this.name = name;
}

let john = User("John"); // redirects call to new User
alert(john.name)

//Return from constructors
function BigUser () {

    this.name = "John";

    return { name: "Godzilla" };  // <-- returns this object
}

alert(new BigUser().name);  // Godzilla, got that object

function SmallUser () {

    this.name = "John";

    return; // <-- returns this
}

alert(new SmallUser().name);  // John


//Methods in constructor
function User(name) {
    this.name = name;

    this.sayHi = function() {
        alert("My name is: " + this.name);
    };
}

let Utkarsh = new User("Utkarsh");
Utkarsh.sayHi(); // My name is: Utkarsh