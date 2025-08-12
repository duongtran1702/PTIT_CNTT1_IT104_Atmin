class HistoryTransaction {
    constructor(
        public typeAccount: string,
        public type: string,
        public amount: number
    ) {}
}

class Account3 {
    constructor(
        public accountNumber: string,
        protected balance: number,
        protected history: HistoryTransaction[],
        protected status: string
    ) {}

    deposit(amount: number): void {
        this.balance += amount;
        this.history.push(new HistoryTransaction('Bank', 'deposit', amount));
    }

    withdraw(amount: number): void {
        if (this.balance < amount) {
            console.log('The balance is not enough');
            return;
        }
        this.balance -= amount;
        this.history.push(new HistoryTransaction('Bank', 'withdraw', amount));
    }

    showHistory() {
        this.history.forEach((e) =>
            console.log(
                `Account: ${e.typeAccount} - Type: ${e.type} - Amount: ${e.amount}`
            )
        );
    }
}

class SavingAccount extends Account3 {
    constructor(
        accountNumber: string,
        balance: number,
        history: HistoryTransaction[],
        status: string,
        public interestRate: number
    ) {
        super(accountNumber, balance, history, status);
    }
    withdraw(amount: number): void {
        if (this.balance < amount) {
            console.log('The balance is not enough');
            return;
        }
        this.balance -= amount;
        this.history.push(new HistoryTransaction('Saving', 'withdraw', amount));
    }

    deposit(amount: number): void {
        this.balance += amount;
        this.history.push(new HistoryTransaction('Saving', 'deposit', amount));
    }
}

const savingAcc = new SavingAccount("12345", 1000, [], "active", 0.05);

savingAcc.deposit(500);   // Nạp 500
savingAcc.withdraw(200);  // Rút 200
savingAcc.withdraw(2000); // Báo không đủ tiền

savingAcc.showHistory();
