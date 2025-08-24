import { Component } from 'react';
import Swal from 'sweetalert2';
import Header from './header/Header';
import Filter from './filter/Filter';
import Pagination from './pagination/Pagination';
import StudentForm from './form/StudentForm';
import TableStudent from './tableStudent/TableStudent';
import type { Student } from './form/StudentForm';

let idx = 1;

interface State {
    students: Student[];
    showForm: boolean;
    editStudent?: Student;
    currentPage: number;
    search: string;
    sort: 'default' | 'name' | 'age';
}

export default class ManageStudents extends Component<object, State> {
    state: State = {
        students: [],
        showForm: false,
        currentPage: 1,
        search: '',
        sort: 'default',
    };

    componentDidMount() {
        const data = localStorage.getItem('students');
        if (data) {
            const students: Student[] = JSON.parse(data);
            this.setState({ students });
            if (students.length > 0) {
                idx = Math.max(...students.map(s => s.id)) + 1;
            }
        }
    }

    toggleForm = (student?: Student) =>
        this.setState(prev => ({
            showForm: !prev.showForm,
            editStudent: student,
        }));

    addStudent = (newStudent: Omit<Student, 'id' | 'status'>) => {
        const tmpStudent: Student = { ...newStudent, id: idx++, status: true };
        this.setState(prev => {
            const updated = [...prev.students, tmpStudent];
            localStorage.setItem('students', JSON.stringify(updated));
            return { students: updated, currentPage: updated.length };
        });
    };

    updateStudent = (updatedStudent: Student) => {
        this.setState(prev => {
            const updated = prev.students.map(s =>
                s.id === updatedStudent.id ? { ...updatedStudent } : s
            );
            localStorage.setItem('students', JSON.stringify(updated));
            return { students: updated };
        });
    };

    deleteStudent = (id: number) => {
        const student = this.state.students.find(s => s.id === id);
        if (!student) return;

        Swal.fire({
            title: `Xóa sinh viên ${student.name}?`,
            text: "Hành động này không thể hoàn tác!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy',
        }).then(result => {
            if (result.isConfirmed) {
                this.setState(prev => {
                    const updated = prev.students.filter(s => s.id !== id);
                    localStorage.setItem('students', JSON.stringify(updated));
                    return { 
                        students: updated, 
                        currentPage: Math.min(prev.currentPage, updated.length)
                    };
                });
                Swal.fire('Đã xóa!', 'Sinh viên đã được xóa.', 'success');
            }
        });
    };

    toggleStatus = (id: number) => {
        const student = this.state.students.find(s => s.id === id);
        if (!student) return;

        Swal.fire({
            title: `${student.status ? 'Chặn' : 'Mở lại'} sinh viên ${student.name}?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: student.status ? 'Chặn' : 'Mở lại',
            cancelButtonText: 'Hủy',
        }).then(result => {
            if (result.isConfirmed) {
                this.setState(prev => {
                    const updated = prev.students.map(s =>
                        s.id === id ? { ...s, status: !s.status } : s
                    );
                    localStorage.setItem('students', JSON.stringify(updated));
                    return { students: updated };
                });
                Swal.fire('Thành công!', `Sinh viên ${student.name} đã được ${student.status ? 'chặn' : 'mở lại'}.`, 'success');
            }
        });
    };

    handlePageChange = (page: number) => this.setState({ currentPage: page });
    handleSearchChange = (search: string) => this.setState({ search, currentPage: 1 });
    handleSortChange = (sort: 'default' | 'name' | 'age') => this.setState({ sort, currentPage: 1 });

    render() {
        const { students, currentPage, search, sort, showForm, editStudent } = this.state;

        // Filter
        const filtered = students.filter(
            s => s.name.toLowerCase().includes(search.toLowerCase()) ||
                 s.email.toLowerCase().includes(search.toLowerCase())
        );

        // Sort
        if (sort === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));
        else if (sort === 'age') filtered.sort((a, b) => new Date(a.dob).getTime() - new Date(b.dob).getTime());

        // Pagination 1 người/trang
        const itemsPerPage = 2;
        const totalPages = Math.ceil(filtered.length / itemsPerPage);
        const indexOfFirst = (currentPage - 1) * itemsPerPage;
        const currentData = filtered.slice(indexOfFirst, indexOfFirst + itemsPerPage);

        return (
            <div style={{ width: 860, padding: 20 }}>
                <Header onOpenForm={() => this.toggleForm()} />

                {showForm && (
                    <StudentForm
                        onAddStudent={this.addStudent}
                        onUpdateStudent={this.updateStudent}
                        onClose={() => this.toggleForm()}
                        editStudent={editStudent}
                    />
                )}

                <Filter
                    data={students}
                    search={search}
                    sort={sort}
                    onSearchChange={this.handleSearchChange}
                    onSortChange={this.handleSortChange}
                />

                <TableStudent
                    data={currentData}
                    onDelete={this.deleteStudent}
                    onToggleStatus={this.toggleStatus}
                    onEdit={(s) => this.toggleForm(s)}
                />

                <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange}
                />
            </div>
        );
    }
}
