"use strict";
class HistoryTransaction {
    constructor(typeAccount, type, amount) {
        this.typeAccount = typeAccount;
        this.type = type;
        this.amount = amount;
    }
}
class Account3 {
    constructor(accountNumber, balance, history, status) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = history;
        this.status = status;
    }
    deposit(amount) {
        this.balance += amount;
        this.history.push(new HistoryTransaction('Bank', 'deposit', amount));
    }
    withdraw(amount) {
        if (this.balance < amount) {
            console.log('The balance is not enough');
            return;
        }
        this.balance -= amount;
        this.history.push(new HistoryTransaction('Bank', 'withdraw', amount));
    }
    showHistory() {
        this.history.forEach((e) => console.log(`Account: ${e.typeAccount} - Type: ${e.type} - Amount: ${e.amount}`));
    }
}
class SavingAccount extends Account3 {
    constructor(accountNumber, balance, history, status, interestRate) {
        super(accountNumber, balance, history, status);
        this.interestRate = interestRate;
    }
    withdraw(amount) {
        if (this.balance < amount) {
            console.log('The balance is not enough');
            return;
        }
        this.balance -= amount;
        this.history.push(new HistoryTransaction('Saving', 'withdraw', amount));
    }
    deposit(amount) {
        this.balance += amount;
        this.history.push(new HistoryTransaction('Saving', 'deposit', amount));
    }
}
const savingAcc = new SavingAccount("12345", 1000, [], "active", 0.05);
savingAcc.deposit(500); // Nạp 500
savingAcc.withdraw(200); // Rút 200
savingAcc.withdraw(2000); // Báo không đủ tiền
savingAcc.showHistory();
