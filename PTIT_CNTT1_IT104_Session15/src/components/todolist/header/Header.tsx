import { Component, type ChangeEvent } from 'react';
import Swal from 'sweetalert2';
import './Header.css';
import Task from '../task/Task';

type TitleProp = {
    children: React.ReactNode;
};

interface Work {
    id: number;
    title: string;
    completed: boolean;
}

interface StateTypes {
    task: string;
    tasks: Work[];
}

interface EditResult {
    isConfirmed: boolean;
    value?: string;
}

let idx = 1;

export default class Header extends Component<TitleProp, StateTypes> {
    state: StateTypes = {
        task: '',
        tasks: [],
    };

    componentDidMount() {
        const data = localStorage.getItem('tasks');
        if (data) {
            const tasks: Work[] = JSON.parse(data);
            this.setState({ tasks });
            if (tasks.length > 0) {
                idx = Math.max(...tasks.map((t) => t.id)) + 1;
            }
        }
    }

    saveToLocalStorage = (tasks: Work[]) => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({ task: e.target.value });
    };

    handleAdd = (): void => {
        const trimmedTask = this.state.task.trim();
        if (!trimmedTask) return;

        const newTask: Work = {
            id: idx++,
            title: trimmedTask,
            completed: false,
        };

        const updatedTasks = [...this.state.tasks, newTask];
        this.setState({ tasks: updatedTasks, task: '' });
        this.saveToLocalStorage(updatedTasks);
    };

    handleToggle = (id: number) => {
        const updatedTasks = this.state.tasks.map((t) =>
            t.id === id ? { ...t, completed: !t.completed } : t
        );
        this.setState({ tasks: updatedTasks });
        this.saveToLocalStorage(updatedTasks);
    };

    handleDelete = (id: number) => {
        Swal.fire({
            title: 'Bạn có chắc chắn muốn xóa?',
            text: 'Hành động này không thể hoàn tác!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy',
        }).then((result: EditResult) => {
            if (result.isConfirmed) {
                const updatedTasks = this.state.tasks.filter((t) => t.id !== id);
                this.setState({ tasks: updatedTasks });
                this.saveToLocalStorage(updatedTasks);
                Swal.fire('Đã xóa!', 'Công việc đã được xóa.', 'success');
            }
        });
    };

    handleEdit = (id: number) => {
        const task = this.state.tasks.find((t) => t.id === id);
        if (!task) return;

        Swal.fire({
            title: 'Chỉnh sửa công việc',
            input: 'text',
            inputValue: task.title,
            showCancelButton: true,
            confirmButtonText: 'Lưu',
            cancelButtonText: 'Hủy',
        }).then((result: EditResult) => {
            const newTitle = result.value?.trim();
            if (result.isConfirmed && newTitle) {
                const updatedTasks = this.state.tasks.map((t) =>
                    t.id === id ? { ...t, title: newTitle } : t
                );
                this.setState({ tasks: updatedTasks });
                this.saveToLocalStorage(updatedTasks);
                Swal.fire('Đã lưu!', 'Công việc đã được cập nhật.', 'success');
            }
        });
    };

    render() {
        const isEmpty = this.state.task.trim() === '';

        return (
            <div>
                <h2>{this.props.children}</h2>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        this.handleAdd();
                    }}
                >
                    <input
                        type="text"
                        placeholder="Thêm công việc mới..."
                        className="input-work"
                        value={this.state.task}
                        onChange={this.handleChange}
                        autoFocus
                    />
                    <button type="submit" className="btn-add">
                        Thêm
                    </button>
                </form>

                {isEmpty ? (
                    <div className="noti">Vui lòng không để trống</div>
                ) : (
                    <div className="empty"></div>
                )}

                {this.state.tasks.map((task) => (
                    <Task
                        key={task.id}
                        data={task}
                        onEdit={this.handleEdit}
                        onDelete={this.handleDelete}
                        onToggle={this.handleToggle}
                    />
                ))}
            </div>
        );
    }
}
