abstract class Job {
    type: string;
    constructor(type: string) {
        this.type = type;
    }
    printType(): void {
        console.log(`Type job: ${this.type}`);
    }
    abstract calculateSalary(): number;
}

class PartimeJob extends Job {
    workingHour: number;
    constructor(type: string, workingHour: number) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary(): number {
        return 30000 * this.workingHour;
    }
}

class FulltimeJob extends Job {
    constructor(type: string) {
        super(type);
    }
    calculateSalary(): number {
        return 10000000;
    }
}

// Khởi tạo đối tượng
const parttime = new PartimeJob("Part-time", 80); 
const fulltime = new FulltimeJob("Full-time");

// In thông tin
parttime.printType();
console.log(`Salary: ${parttime.calculateSalary().toLocaleString()} VND\n`);

fulltime.printType();
console.log(`Salary: ${fulltime.calculateSalary().toLocaleString()} VND`);