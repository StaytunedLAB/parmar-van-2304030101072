let animal = {
    eaat : true,
};

function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit");
alert(rabbit.eaat); // true



// Default F.prototype, constructor property
function Rabbit () { }

alert(Rabbit.prototype.constructor == Rabbit); // true



function rabbit() {}

let rabbit = new rabbit();

alert(rabbit.constructor == rabbit); // true



// constructor property to create a new object
function rabit(name) {
    this,name = name;
    alert(name);
}

let rabit = new rabit("White rabbit");

let rabit2 = new rabit("Black rabbit"); 