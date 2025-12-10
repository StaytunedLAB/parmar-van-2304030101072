// Banking_system.js
// A simple banking system that processes deposits and withdrawals,
// maintaining account balance and logging applied/rejected transactions.   

// Sample input (You can modify this safely)
const inputData = {
    accountNumber: "AC998877",
    holderName: "Alice Morgan",
    initialBalance: "2500.75",
    currency: "USD",
    transactions: [
        { type: "Deposit", amount: "500" },
        { type: "Withdraw", amount: 1000 },
        { type: "Withdraw", amount: "8000" },  // insufficient funds
        { type: "Deposit", amount: "-50" },    // negative
        { type: "", amount: "200" },           // missing type
        { type: "Pay", amount: "100" },        // unknown type
        { amount: 300 },                        // missing type
        { type: "Withdraw", amount: "ABC" },   // invalid number
        { type: "Deposit", amount: "250" }
    ]
};

const data = JSON.parse(JSON.stringify(inputData));


// RESULT STORAGE
let appliedTransactions = [];
let rejectedTransactions = [];
let finalBalance = 0;
let auditMessage = "";

try {

    // ---------------------------
    // Convert initial balance
    // ---------------------------
    let initial = Number(data.initialBalance);

    if (isNaN(initial) || initial < 0) {
        throw new Error("Invalid initial balance");
    }

    finalBalance = initial;

    // ---------------------------
    // Process each transaction
    // ---------------------------
    for (const tx of data.transactions) {
        try {
            // Validate transaction type
            if (!tx.type || (tx.type !== "Deposit" && tx.type !== "Withdraw")) {
                rejectedTransactions.push({
                    transaction: tx,
                    reason: "Invalid or missing transaction type"
                });
                continue;
            }

            // Validate amount
            const amt = Number(tx.amount);
            if (isNaN(amt) || amt <= 0) {
                rejectedTransactions.push({
                    transaction: tx,
                    reason: "Invalid transaction amount"
                });
                continue;
            }

            // Apply Deposit
            if (tx.type === "Deposit") {
                finalBalance += amt;
                appliedTransactions.push({
                    type: tx.type,
                    amount: amt
                });
            }

            // Apply Withdraw
            else if (tx.type === "Withdraw") {
                if (amt > finalBalance) {
                    rejectedTransactions.push({
                        transaction: tx,
                        reason: "Insufficient balance"
                    });
                    continue;
                }

                finalBalance -= amt;
                appliedTransactions.push({
                    type: tx.type,
                    amount: amt
                });
            }

        } catch (txErr) {
            // Errors inside the loop
            rejectedTransactions.push({
                transaction: tx,
                reason: "System Error: " + txErr.message
            });
        }
    }

} catch (err) {
    // Errors in main system logic
    auditMessage = "System Error: " + err.message;
} finally {
    // FINAL BLOCK ALWAYS RUNS
    if (!auditMessage) {
        auditMessage = "Processing completed — audit log created.";
    }
}

console.log("\n=======================================");
console.log("           ACCOUNT SUMMARY             ");
console.log("=======================================\n");

console.log("Account Number:  ", data.accountNumber);
console.log("Account Holder:  ", data.holderName);
console.log("Currency:        ", data.currency);
console.log("Initial Balance: ", data.initialBalance);
console.log("---------------------------------------");
console.log("Final Balance:   ", finalBalance.toFixed(2));
console.log("---------------------------------------");

console.log("\nApplied Transactions:");
console.log(appliedTransactions);

console.log("\nRejected Transactions:");
console.log(rejectedTransactions);

console.log("\nAudit Log:");
console.log(auditMessage);

console.log("\n=======================================\n");

console.log("Banking system processing completed.");
module.exports = {
    appliedTransactions,
    rejectedTransactions,
    finalBalance,
    auditMessage
};  
// End of Banking_system.js