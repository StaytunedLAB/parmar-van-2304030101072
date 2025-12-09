try {
    let balance = 5000; // initial balance

    // Sample transactions
    let action = "withdraw"; // "deposit" or "withdraw"
    let amount = 3000;

    if (typeof amount !== "number" || amount <= 0) {
        throw new Error("Invalid amount entered");
    }

    if (action === "deposit") {
        balance += amount;
        console.log("Deposited:", amount);

    } else if (action === "withdraw") {
        if (amount > balance) {
            throw new Error("Insufficient balance!");
        }
        balance -= amount;
        console.log("Withdrawn:", amount);

    } else {
        throw new Error("Invalid transaction type");
    }

    console.log("Final Balance:", balance);

} catch (err) {
    console.log("❌ Error:", err.message);
}
