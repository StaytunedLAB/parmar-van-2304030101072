function generateFibonacci(terms) {
    let n1 = 0, n2 = 1, nextTerm;
    let sequence = [];

    console.log(`Fibonacci Series of ${terms} terms:`);

    for (let i = 1; i <= terms; i++) {
        sequence.push(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    
    console.log(sequence.join(", "));
}

console.log("Fibonacci Sequence Generation:");
generateFibonacci(10);  
module.exports = generateFibonacci; 
