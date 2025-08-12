class HistoryTransaction1 {
    constructor(
        public typeAccount: string,
        public type: string,
        public amount: number,
        public currentBalance: number,
        public time: string
    ) {}
}

const getTimeCurrent = (): string => {
    const now = new Date();

    const h = now.getHours().toString().padStart(2, '0');
    const m = now.getMinutes().toString().padStart(2, '0');
    const s = now.getSeconds().toString().padStart(2, '0');

    const D = now.getDate().toString().padStart(2, '0');
    const M = (now.getMonth() + 1).toString().padStart(2, '0');
    const Y = now.getFullYear().toString();

    return `${h}:${m}:${s} ${D}/${M}/${Y}`;
};

class Account4 {
    constructor(
        public accountNumber: string,
        protected balance: number,
        protected history: HistoryTransaction1[],
        protected status: string
    ) {}

    deposit(amount: number): void {
        if (amount <= 0) {
            console.log('Deposit amount must be greater than zero.');
            return;
        }
        this.balance += amount;
        this.history.push(
            new HistoryTransaction1(
                'Bank',
                'deposit',
                amount,
                this.balance,
                getTimeCurrent()
            )
        );
    }

    withdraw(amount: number): void {
        if (amount <= 0) {
            console.log('Withdrawal amount must be greater than zero.');
            return;
        }
        if (this.balance < amount) {
            console.log('The balance is not enough.');
            return;
        }
        this.balance -= amount;
        this.history.push(
            new HistoryTransaction1(
                'Bank',
                'withdraw',
                amount,
                this.balance,
                getTimeCurrent()
            )
        );
    }

    showHistory() {
        this.history.forEach((e) =>
            console.log(
                `Account: ${e.typeAccount} - Type: ${e.type} - Amount: ${e.amount} - Time: ${e.time}\nCurrent balance: ${e.currentBalance}\n`
            )
        );
    }
}

class CheckingAccount extends Account4 {
    constructor(
        accountNumber: string,
        balance: number,
        history: HistoryTransaction1[],
        status: string,
        public overdraftLimit: number
    ) {
        super(accountNumber, balance, history, status);
    }

    withdraw(amount: number): void {
        if (amount <= 0) {
            console.log('Withdrawal amount must be greater than zero.');
            return;
        }

        if (this.balance + this.overdraftLimit < amount) {
            console.log(
                `Withdrawal denied. Available funds (including overdraft): ${
                    this.balance + this.overdraftLimit
                }\n`
            );
            return;
        }

        this.balance -= amount;
        this.history.push(
            new HistoryTransaction1(
                'Bank',
                'withdraw',
                amount,
                this.balance,
                getTimeCurrent()
            )
        );
    }
}

const myChecking = new CheckingAccount('CHK-001', 1000, [], 'active', 500);

// Nạp tiền
myChecking.deposit(200);

// Rút trong số dư
myChecking.withdraw(500);

// Rút vượt số dư nhưng trong hạn mức overdraft
myChecking.withdraw(1000);

// Rút vượt quá hạn mức overdraft
myChecking.withdraw(2000);

// In lịch sử giao dịch
myChecking.showHistory();
