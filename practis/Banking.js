// Banking System - Transaction & Balance Validator Template

class BankAccount {
    constructor(accountHolder, initialBalance = 0) {
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
        this.minBalance = 100; // Example Rule: Minimum required balance
    }

    // Function to handle deposits and validation
    deposit(amount) {
        if (typeof amount !== 'number' || amount <= 0) {
            throw new Error("InvalidDepositAmount: Amount must be a positive number.");
        }
        this.balance += amount;
        return Deposit successful. New balance: $${this.balance.toFixed(2)};
    }

    // Function to handle withdrawals and validation
    withdraw(amount) {
        if (typeof amount !== 'number' || amount <= 0) {
            throw new Error("InvalidWithdrawalAmount: Amount must be a positive number.");
        }
        if (this.balance - amount < this.minBalance) {
            throw new Error("InsufficientFunds: Withdrawal would drop the balance below the minimum required balance.");
        }
        this.balance -= amount;
        return Withdrawal successful. New balance: $${this.balance.toFixed(2)};
    }
}

/**
 * Main function to demonstrate a transaction (e.g., a withdrawal)
 * All operations are wrapped in try...catch as required.
 */
function processTransaction(account, type, amount) {
    console.log(\nAttempting ${type} of $${amount.toFixed(2)} for ${account.accountHolder}...);
    try {
        let result;
        if (type === 'deposit') {
            result = account.deposit(amount);
        } else if (type === 'withdraw') {
            result = account.withdraw(amount);
        } else {
            throw new Error("InvalidTransactionType: Must be 'deposit' or 'withdraw'.");
        }
        
        // Operation successful!
        console.log("✅ SUCCESS:", result);
        return true;

    } catch (error) {
        // All errors must be handled here
        console.error("❌ ERROR:", error.message);
        return false;
    }
}

// --- Demonstration (Example Usage) ---

// Create an account
const userAccount = new BankAccount("Alice Smith", 500);

// Example 1: Successful Withdrawal
processTransaction(userAccount, 'withdraw', 100);

// Example 2: Failed Withdrawal (Insufficient Funds)
processTransaction(userAccount, 'withdraw', 450); // Will fail because 500 - 450 = 50, which is < $100 minBalance

// Example 3: Failed Deposit (Invalid Amount)
processTransaction(userAccount, 'deposit', -50);