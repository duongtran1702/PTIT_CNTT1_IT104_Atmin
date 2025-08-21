import { useState } from 'react';
import { useEffect } from 'react';
import './Tasks.css';
import Swal from 'sweetalert2';

export const Tasks = () => {
    const [tasks, setTasks] = useState([
        { id: 1, name: 'Quet nha', completed: false },
        { id: 2, name: 'Lau don', completed: false },
        { id: 3, name: 'Nau com', completed: false },
        { id: 4, name: 'Giat do', completed: false },
    ]);
    const [newTask, setNewTask] = useState('');
    const [error, setError] = useState(false);
    const handleAdd = () => {
        if (newTask === '') {
            setError(true);
            return;
        }
        tasks.forEach((t) => {
            if (t.name.toLocaleLowerCase() == newTask.toLocaleLowerCase()) {
                return;
            }
        });
        const task = {
            id: Math.floor(Math.random() * 100000),
            name: newTask,
            completed: false,
        };
        setTasks((prev) => [...prev, task]);
        console.log(tasks);
        setNewTask('');
        setError(false);
        handleLocal();
    };
    const handleDelete = (id: number, name: string) => {
        Swal.fire({
            title: `Bạn có chắc muốn xóa công việc ${name}?`,
            text: 'Hành động này không thể hoàn tác!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Có, xóa!',
            cancelButtonText: 'Hủy',
        }).then((result) => {
            if (result.isConfirmed) {
                setTasks((prev) => prev.filter((t) => t.id !== id));
                Swal.fire('Xoá thành công!', '', 'success');
                handleLocal();
            }
        });
    };

    const handleEdit = (id: number) => {
        Swal.fire({
            title: 'Nhập dữ liệu của bạn',
            input: 'text',
            inputLabel: 'Nhập vào đây:',
            inputPlaceholder: 'Nhập thông tin...',
            showCancelButton: true,
            confirmButtonText: 'Xác nhận',
            cancelButtonText: 'Hủy',
            inputValidator: (value) => {
                if (!value.trim()) {
                    return 'Bạn phải nhập dữ liệu!';
                }
                return null;
            },
        }).then((result) => {
            if (result.isConfirmed) {
                setTasks((prev) =>
                    prev.map((task) =>
                        task.id === id ? { ...task, name: result.value } : task
                    )
                );
                Swal.fire({
                    title: 'Sửa thành công!',
                    icon: 'success',
                });
            }
        });
    };

    const handleCheck = (id: number) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
        handleLocal();
    };

    const handleLocal = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };
    handleLocal();

    useEffect(() => {
        console.log('Danh sách mới:', tasks);
    }, [tasks]);
    return (
        <div className="container">
            <h2>Danh sach cong viec</h2>
            <div style={{ display: 'flex', gap: '3%', marginBottom: '2%' }}>
                <input
                    type="text"
                    className="taskInput"
                    placeholder="Nhap ten cong viec"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button className="addBtn" onClick={handleAdd}>
                    Thêm
                </button>
            </div>
            <div
                className="errorMsg"
                style={{ display: error ? 'flex' : 'none' }}
            >
                Ten cong viec khong duoc de trong
            </div>
            {tasks.map((t) => {
                return (
                    <div className="taskContainer" key={t.id}>
                        <div>
                            <input
                                type="checkbox"
                                checked={t.completed}
                                onChange={() => handleCheck(t.id)}
                            />
                            <label
                                htmlFor=""
                                style={{
                                    textDecoration: t.completed
                                        ? 'line-through'
                                        : 'none',
                                }}
                            >
                                {t.name}
                            </label>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <i
                                className="fa-solid fa-pen"
                                style={{ color: '#fba52d' }}
                                onClick={() => handleEdit(t.id)}
                            ></i>
                            <i
                                className="fa-solid fa-trash"
                                style={{ color: '#ff0a0a' }}
                                onClick={() => handleDelete(t.id, t.name)}
                            ></i>
                        </div>
                    </div>
                );
            })}

            {tasks.filter((t) => t.completed === true).length !==
            tasks.length ? (
                <div className="completedInfo">
                    Cong viec da hoan thanh:
                    <strong>
                        {tasks.filter((t) => t.completed === true).length}/
                        {tasks.length}
                    </strong>
                </div>
            ) : (
                <div className="completedAll">
                    <i
                        className="fa-solid fa-circle-check"
                        style={{ color: '#63E6BE' }}
                    ></i>
                    <span style={{ marginLeft: '2%' }}>
                        Hoan thanh cong viec
                    </span>
                </div>
            )}
        </div>
    );
};
