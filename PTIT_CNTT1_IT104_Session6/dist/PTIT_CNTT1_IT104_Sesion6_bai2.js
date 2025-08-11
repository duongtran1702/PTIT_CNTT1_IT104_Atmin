"use strict";
class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(`Type job: ${this.type}`);
    }
}
class PartimeJob extends Job {
    constructor(type, workingHour) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
class FulltimeJob extends Job {
    constructor(type) {
        super(type);
    }
    calculateSalary() {
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
