// Recursion and stack
function pow (x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}
alert(pow(2, 3)); // 8

// Recursive function
function pow (x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

alert(pow(2, 4)); // 16


// Recursion is usually shorter
function power (a, b) {
    return (b == 1) ? a : a * power(a, b - 1);
}

// The execution context and stack
function powr (x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * powr(x, n - 1);
    }
}
alert(power(2, 6)); // 64


// Recursive traversals
let company = {
    sales: [{ name: "utkarsh", salary: 1000 }, { name: "tarun", salary: 1600 }],
    development: {
        sites: [{ name: "vaibhav", salary: 2000 }, { name: "ankit", salary: 2300 }],
    }
};

function sumSalaries (dept) {
    if (Array.isArray(dept)) {
        return dept.reduce((prev, current) => prev + current.salary, 0);
    } else {
        let sum = 0;
        for (let subdep of Object.values(dept)) {
            sum += sumSalaries(subdep);
        }
        return sum;
    }
}

alert(sumSalaries(company)); // 6900