// Rest parameters and spread syntax

function sumAll(...numbers) {
    let total = 0;

    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

function showName(firstName, lastName, ...titles) {
    alert(firstName + ' ' + lastName); 

    alert(titles[0]);
    alert(titles[1]); 
    alert(titles.length); 
}

showName("Utkarsh", "Prajapati", "Developer", "Programmer", "Designer");


// The “arguments” variable
function shwName() {
    alert(argunments.length0);
    alert(arguments[0]);
    alert(arguments[1]);
}

shwName("Utkarsh", "Prajapati");


// Spread syntax
let arr = [3, 5, 1];
alert(Math.max(...arr)); 


let arr1 = [3, 5, 1];
let arr2 = [8, 9, 15];

let merged = [0, ...arr1, 2, ...arr2];

alert(merged);

let str = "Hello";


alert(Array.from(str)); // H,e,l,l,o


// Copy an array/object
let array = [1, 2, 3];
let arrayCopy = [...array];

alert(JSON.stringify(array) === JSON.stringify(arrayCopy)); // true

alert(array === arrayCopy); // false


let obj = { a: 1, b: 2, c: 3 };
let objCopy = { ...obj };

alert(JSON.stringify(obj) === JSON.stringify(objCopy)); // true

alert(obj === objCopy); // false    