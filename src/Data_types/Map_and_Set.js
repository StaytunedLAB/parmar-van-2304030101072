// Map and Set

// Map 
// map[key] isn’t the right way to use a Map
let map = new Map();

map.set(1, 'num')
map.set(true, 'bool')

console.log(map.get(1));
console.log(map.get(true))

// Map can also use objects as keys.
let john = { name: "John" };

let visitsCountMap = new Map();

visitsCountMap.set(john, 123);
alert(visitsCountMap.get(john));

// Iteration over Map
let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);

for (let vegetable of recipeMap.keys()) {  
    alert(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
    alert(amount); // 500, 350, 50
}

let obj = {
    name: "Utkarsh",
    age: 21
};

let map1 = new Map(Object.entries(obj));
console.log(map1.get('name')); // Utkarsh

// Object.fromEntries: Object from Map
let price = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
]);

console.log(price.orange); // 2


// Set 
let set = new Set();

let john1 = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

set.add(john1);
set.add(pete);
set.add(mary);
set.add(john1); // duplicate john1 will not be added

alert(set.size); // 3

for (let user of set) { 
    alert(user.name); // John (then Pete and Mary)
}

// Iteration over Set 
let set1 = new Set(["oranges", "apples", "bananas"]);

for (let value of set1) alert(value);

// the same with forEach:
set.forEach((value, valueAgain, set1) => {
    alert(value);
});