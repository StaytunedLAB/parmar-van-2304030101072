// Object.keys, values, entries

let user = {
    name: "John",
    age: 30
};

// loop over values
for (let value of Object.values(user)) {
    alert(value); // John, then 30
}

// Transforming objects
let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};

let doublePrices = Object.fromEntries(
    Object.entries(prices).map(enrty => [entry[0], entry[1] * 2])
);
alert(doublePrices.meat); // 8


let salaries = {
    "John": 100,
    "Ann": 160,
    "Pete": 130
};

function sumSalaries (salaries) {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;

        return sum;
    }
    alert(sumSalaries(salaries)); // 390
};