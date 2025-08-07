interface Person {
    name: string;
    age: number;
}

interface Employee {
    employeeId: string;
    department: string;
}

type StaffMember = Person & Employee;

const printStaffInfo = (staff: StaffMember): string => {
    return `Nhân viên: ${staff.name} (${staff.age} tuổi) , Mã nhân viên: ${staff.employeeId} - ${staff.department}`;
};

const staff1: StaffMember = {
    name: 'Dương',
    age: 22,
    employeeId: 'EMP001',
    department: 'IT',
};

console.log(printStaffInfo(staff1));
