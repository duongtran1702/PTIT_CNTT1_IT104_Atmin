class Employee {
    public name: string;
    protected company: string;
    private phone: string;

    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    printInfo(): void {
        console.log(
            `Name: ${this.name} - Phone: ${this.phone} - Company: ${this.company}`
        );
    }
    getPhone(): string {
        return this.phone;
    }
}

class Manager extends Employee {
    public teamSize: number;

    constructor(
        name: string,
        company: string,
        phone: string,
        teamSize: number
    ) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }

    printInfo(): void {
        console.log(
            `Name: ${this.name} - Phone: ${this.getPhone()} - Company: ${
                this.company
            } - Team size: ${this.teamSize}`
        );
    }
}

const emp = new Employee("Dương", "PTIT", "0123456789");
emp.printInfo();

const mgr = new Manager("Lam", "PTIT", "0987654321", 10);
mgr.printInfo();
