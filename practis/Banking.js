/* Banking System – Transaction & Balance Validator*/

function processBankAccount(accountData) {
    // Prevent modification of original input
    const input = JSON.parse(JSON.stringify(accountData));

    // Extract fields safely
    const accountNumber = input.accountNumber || "UNKNOWN";
    const holderName = input.holderName || "UNKNOWN";
    const currency = input.currency || "USD";

    // Convert opening balance safely
    let initialBalance = Number(input.initialBalance);
    if (isNaN(initialBalance)) initialBalance = 0;

    let balance = initialBalance;

    const applied = [];
    const rejected = [];
    let auditLogMessage = "";

    try {
        // Ensure transactions array exists
        const transactions = Array.isArray(input.transactions)
            ? input.transactions
            : [];

        for (const tx of transactions) {
            try {
                // Validate presence of fields
                if (!tx || !tx.type) {
                    rejected.push({
                        transaction: tx,
                        reason: "Missing transaction type"
                    });
                    continue;
                }

                const type = tx.type.trim().toLowerCase();
                let amount = Number(tx.amount);

                // Validate amount
                if (isNaN(amount)) {
                    rejected.push({
                        transaction: tx,
                        reason: "Amount is not a valid number"
                    });
                    continue;
                }

                if (amount <= 0) {
                    rejected.push({
                        transaction: tx,
                        reason: "Amount must be greater than zero"
                    });
                    continue;
                }

                // Apply rules
                if (type === "deposit") {
                    balance += amount;
                    applied.push({
                        type: "Deposit",
                        amount,
                        newBalance: balance
                    });
                } else if (type === "withdraw") {

                    if (amount > balance) {
                        rejected.push({
                            transaction: tx,
                            reason: "Insufficient funds"
                        });
                        continue;
                    }

                    balance -= amount;
                    applied.push({
                        type: "Withdraw",
                        amount,
                        newBalance: balance
                    });
                } else {
                    rejected.push({
                        transaction: tx,
                        reason: "Unknown transaction type"
                    });
                }

            } catch (innerErr) {
                // Catch unexpected transaction-level errors
                rejected.push({
                    transaction: tx,
                    reason: "System Error"
                });
            }
        }

    } catch (err) {
        // System-level unexpected error
        auditLogMessage = "System Error occurred during processing.";
    } finally {
        // Always executed
        if (!auditLogMessage) {
            auditLogMessage = "Processing completed successfully.";
        }
    }

    // Final structured output
    return {
        accountNumber,
        holderName,
        currency,
        initialBalance,
        finalBalance: balance,
        appliedTransactions: applied,
        rejectedTransactions: rejected,
        auditLog: auditLogMessage
    };
}


//   Example Usage

const sampleInput = {
    accountNumber: "ACC-9988",
    holderName: "John Doe",
    initialBalance: "1500",
    currency: "USD",
    transactions: [
        { type: "Deposit", amount: 200 },
        { type: "Withdraw", amount: 100 },
        { type: "Withdraw", amount: 5000 },       
        { type: "Deposit", amount: -20 },         
        { type: "abc", amount: 30 },              
        { type: "Withdraw", amount: "xyz" },      
        { amount: 50 },                           
        null                                      
    ]
};

console.log(processBankAccount(sampleInput));