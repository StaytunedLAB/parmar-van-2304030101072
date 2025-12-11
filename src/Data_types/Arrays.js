// Declaration 
let arr1 = new Array();
let arr2 = [];

let fruits = ["Apple", "Orange", "Plum"];
alert(fruits[0]); // Apple
alert(fruits[1]); // Orange
alert(fruits[2]); // Plum
fruits[2] = 'Pear';
fruits[3] = 'Lemon';

let fruits = ["Apple", "Orange", "Plum"];
alert(fruits.length);

// mix of values
let arr = ['Apple', { name: 'John' }, true, function () { alert('hello'); }];

// get the object at index 1 and then show its name
alert(arr[1].name); // John

// get the function at index 3 and run it
arr[3](); // hello


let fruits = ["Apple", "Orange", "Plum"];

// same as fruits[fruits.length-1]
alert(fruits.at(-1)); // Plum

// Methods pop/push, shift/unshift

//pop
let fruits = ["Apple", "Orange", "Pear"];

alert(fruits.pop());

alert(fruits); // Apple, Orange

// shift 
let fruits = ["Apple", "Orange", "Pear"];

alert(fruits.shift()); 

alert(fruits); // Orange, Pear


let fruits = ["Orange", "Pear"];

fruits.unshift('Apple');

alert(fruits); // Apple, Orange, Pear


let fruits = ["Apple"];

fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");

// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
alert(fruits);


// Internals 
let fruits = ["Banana"];

let arr5 = fruits; // copy by reference (two variables reference the same array)

alert(arr5 === fruits); // true

arr5.push("Pear"); // modify the array by reference

alert(fruits); // Banana, Pear - 2 items now


// Loops 
let arrfrut = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arrfrut.length; i++) {
    alert(arrfrut[i]);
}

let fruits = ["Apple", "Orange", "Plum"];
// iterates over array elements
for (let fruit of fruits) {
    alert(fruit);
}
let arrfru = ["Apple", "Orange", "Pear"];

for (let key in arrfru) {
    alert(arrfru[key]); // Apple, Orange, Pear
}

// new Array() 
let arrn = new Array(2); // will it create an array of [2] ?
alert(arrn[0]); // undefined! no elements.

alert(arrn.length); // length 2


// Multidimensional arrays 
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
alert(matrix[0][1]);

// toString
let array = [1, 2, 3];

alert(array); // 1,2,3
alert(String(array) === '1,2,3'); // true
alert([] + 1); // "1"
alert([1] + 1); // "11"
alert([1, 2] + 1); // "1,21"

let arry = ["I", "go", "home"];

delete arry[1]; // remove "go"

alert(arry[1]); // undefined

// now arr = ["I",  , "home"];
alert(arry.length); // 3

// Array methods
// Add/remove items

// splice
let ar = ["I", "study", "JavaScript"];

ar.splice(1, 1); // from index 1 remove 1 element

alert(ar); // ["I", "JavaScript"]

let txt = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
txt.splice(0, 3, "Let's", "dance");

alert(txt); // now ["Let's", "dance", "right", "now"]

// concat
let arr3 = [1, 2];

// create an array from: arr and [3,4]
alert(arr3.concat([3, 4])); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
alert(arr3.concat([3, 4], [5, 6])); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
alert(arr3.concat([3, 4], 5, 6)); // 1,2,3,4,5,6

// Iterate: forEach
// for each element call alert
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

// Searching in array
let arr4 = [1, 0, false];

alert(arr4.indexOf(0)); // 1
alert(arr4.indexOf(false)); // 2
alert(arr4.indexOf(null)); // -1

alert(arr4.includes(1)); // true


// find and findIndex/findLastIndex
let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" },
    { id: 4, name: "John" }
];

// Find the index of the first John
let usrs = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
];

let user = usrs.find(item => item.id == 1);

alert(user.name); // John


alert(usrs.findIndex(user => user.name == 'John')); // 0

// Find the index of the last John
alert(usrs.findLastIndex(user => user.name == 'John')); // 3

// filter
let usr = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
];

// returns array of the first two users
let someUsers = usr.filter(item => item.id < 3);

alert(someUsers.length); // 2

// map
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6

// sort(fn) 
let arr6 = [1, 2, 15];

// the method reorders the content of arr
arr6.sort();

alert(arr6);  // 1, 15, 2
// Arrow functions for the best
arr6.sort((a, b) => a - b);

// localeCompare for strings
let countries = ['Österreich', 'Andorra', 'Vietnam'];

alert(countries.sort((a, b) => a > b ? 1 : -1)); // Andorra, Vietnam, Österreich (wrong)

alert(countries.sort((a, b) => a.localeCompare(b))); // Andorra,Österreich,Vietnam (correct!)

// reverse
let arr7 = [1, 2, 3, 4, 5];
arr7.reverse(); 

// split and join
let names = 'Bilbo, Gandalf, Nazgul';

let arr8 = names.split(', ');

for (let name of arr8) {
    alert(`A message to ${name}.`); // A message to Bilbo  (and other names)
}

let arr9 = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);

alert(arr9); // Bilbo, Gandalf

// Split into letters
let str = "test";

alert(str.split('')); // t,e,s,t

let arr0 = ['Bilbo', 'Gandalf', 'Nazgul'];

let str0 = arr0.join(';'); // glue the array into a string using ;

alert(str0); // Bilbo;Gandalf;Nazgul


// reduce/reduceRight
let arr11 = [1, 2, 3, 4, 5];    
let result = arr11.reduce((sum, current) => sum + current, 0);
alert(result); // 15

// Array.isArray
alert(Array.isArray({})); // false

alert(Array.isArray([])); // true