import { Component, type ChangeEvent, type FormEvent } from "react";
import "./StudentForm.css";

export interface Student {
    id: number;
    msv: string;
    name: string;
    dob: string;
    email: string;
    status: boolean;
}

interface Props {
    onAddStudent: (student: Omit<Student, "id" | "status">) => void;
    onUpdateStudent?: (student: Student) => void;
    onClose: () => void;
    editStudent?: Student;
}

interface State {
    name: string;
    msv: string;
    dob: string;
    email: string;
    error: string;
}

export default class StudentForm extends Component<Props, State> {
    state: State = {
        name: "",
        msv: "",
        dob: "",
        email: "",
        error: "",
    };

    componentDidMount() {
        const { editStudent } = this.props;
        if (editStudent) {
            this.setState({
                name: editStudent.name,
                msv: editStudent.msv,
                dob: editStudent.dob,
                email: editStudent.email,
                error: "",
            });
        }
    }

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({ [name]: value } as Pick<State, keyof State>);
    };

    handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const { name, msv, dob, email } = this.state;
        if (!name || !msv || !dob || !email) {
            this.setState({ error: "Vui lòng điền đầy đủ thông tin!" });
            return;
        }

        if (this.props.editStudent && this.props.onUpdateStudent) {
            this.props.onUpdateStudent({
                ...this.props.editStudent,
                name,
                msv,
                dob,
                email,
            });
        } else {
            this.props.onAddStudent({ name, msv, dob, email });
        }

        this.setState({ name: "", msv: "", dob: "", email: "", error: "" });
        this.props.onClose();
    };

    render() {
        const { name, msv, dob, email, error } = this.state;
        const isEdit = !!this.props.editStudent;

        return (
            <div className="overlay">
                <div className="modal">
                    <h3>{isEdit ? "Cập nhật sinh viên" : "Thêm sinh viên"}</h3>
                    <form className="student-form" onSubmit={this.handleSubmit}>
                        <input name="name" value={name} placeholder="Tên sinh viên" onChange={this.handleChange} />
                        <input name="msv" value={msv} placeholder="Mã sinh viên" onChange={this.handleChange} />
                        <input type="date" name="dob" value={dob} onChange={this.handleChange} />
                        <input type="email" name="email" value={email} placeholder="Email" onChange={this.handleChange} />
                        {error && <div className="error">{error}</div>}
                        <div className="form-buttons">
                            <button type="submit">{isEdit ? "Cập nhật" : "Thêm"}</button>
                            <button type="button" onClick={this.props.onClose}>Hủy</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
