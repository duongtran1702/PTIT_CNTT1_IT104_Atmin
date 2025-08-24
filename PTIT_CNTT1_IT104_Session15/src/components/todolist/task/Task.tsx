import { Component } from 'react';
import './Task.css';

interface Work {
    id: number;
    title: string;
    completed: boolean;
}

interface TaskProps {
    data: Work;
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
}

export default class Task extends Component<TaskProps> {
    render() {
        const { data, onEdit, onDelete, onToggle } = this.props;

        return (
            <div className="task">
                <div className="left">
                    <input
                        type="checkbox"
                        checked={data.completed}
                        onChange={() => onToggle(data.id)}
                    />
                    <span
                        style={{
                            textDecoration: data.completed
                                ? 'line-through'
                                : 'none',
                        }}
                    >
                        {data.title}
                    </span>
                </div>
                <div className="right">
                    <button
                        onClick={() => onEdit(data.id)}
                        className="btn-edit"
                    >
                        Sửa
                    </button>
                    <button
                        onClick={() => onDelete(data.id)}
                        className="btn-delete"
                    >
                        Xóa
                    </button>
                </div>
            </div>
        );
    }
}
