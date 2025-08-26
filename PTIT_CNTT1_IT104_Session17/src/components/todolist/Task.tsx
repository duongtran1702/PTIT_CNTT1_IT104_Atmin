import type { Work } from './ToDoList';
import Swal from 'sweetalert2';

interface ChildProp2 {
    task: Work;
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
}

export default function Task({ task, onDelete, onToggle }: ChildProp2) {
    const handleDelete = () => {
        Swal.fire({
            title: 'Bạn có chắc chắn muốn xóa?',
            text: `Công việc "${task.title}" sẽ bị xóa!`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy',
        }).then((result) => {
            if (result.isConfirmed) {
                onDelete(task.id);
                Swal.fire('Đã xóa!', 'Công việc đã bị xóa.', 'success');
            }
        });
    };

    return (
        <li
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 15px',
                marginBottom: 10,
                borderRadius: 12,
                background: task.isCompleted
                    ? 'rgba(76, 175, 80, 0.9)'
                    : 'rgba(255, 255, 255, 0.15)',
                textDecoration: task.isCompleted ? 'line-through' : 'none',
                transition: '0.3s',
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <input
                    type="checkbox"
                    checked={task.isCompleted}
                    onChange={() => onToggle(task.id)}
                    style={{ cursor: 'pointer' }}
                />
                <span>{task.title}</span>
            </div>
            <div style={{ display: 'flex', gap: '6px' }}>
                <button
                    onClick={handleDelete}
                    style={{
                        padding: '6px 12px',
                        borderRadius: 8,
                        border: 'none',
                        background: '#f44336',
                        color: 'white',
                        cursor: 'pointer',
                        transition: '0.3s',
                    }}
                >
                    Xóa
                </button>
            </div>
        </li>
    );
}
