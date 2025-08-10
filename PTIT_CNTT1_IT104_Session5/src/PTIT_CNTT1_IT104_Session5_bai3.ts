class Employee {
    public name: string;
    protected company: string;
    private phone: string;

    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    public printInfo():void {
        console.log(`${this.name} - ${this.company} - ${this.phone}`);
    }
    
}

const emp1 = new Employee("Nguyễn Văn A", "ABC Corp", "0123 456 789");
emp1.printInfo();