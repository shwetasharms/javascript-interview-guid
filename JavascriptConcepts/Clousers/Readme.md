### What are clousers ? Real-life example where you have implemented it in javascript

Ans - Closures = a function + the variables it “remembers” from its outer scope even after that outer function has finished executing.
function createCounter() {
    let count = 0; // Private variable
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

```
function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit(amount) {
            balance += amount;
            return balance;
        },
        withdraw(amount) {
            if (amount > balance) {
                return "Insufficient funds";
            }
            balance -= amount;
            return balance;
        },
        getBalance() {
            return balance;
        }
    };
}

const account = createBankAccount(1000);

console.log(account.deposit(500));   // 1500
console.log(account.withdraw(200));  // 1300
console.log(account.getBalance());   // 1300
```
