import { useContext, useEffect, useRef, useState } from 'react';
import type { Item } from '../interfaces/item.interface';
import { TaskContext } from '../context/TaskContext';

export default function TaskItem({ data }: Item) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [newName, setNewName] = useState(data.name);
    const context = useContext(TaskContext);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (inputRef.current && isModalOpen) inputRef?.current?.focus();
    }, [isModalOpen]);

    if (!context) return null;
    const { handleDeleteTask, handleToggleTask, handleUpdateTask } = context;

    // State modal

    const openModal = () => {
        setNewName(data.name);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    const submitUpdate = () => {
        if (newName.trim() !== '') {
            handleUpdateTask(data.id, newName.trim());
            closeModal();
        }
    };

    return (
        <>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <div className="form-check">
                    <input
                        className="form-check-input me-2"
                        type="checkbox"
                        checked={data.isCompleted}
                        onChange={() => handleToggleTask(data.id)}
                    />
                    <span
                        className="task-name"
                        style={{
                            textDecoration: data.isCompleted
                                ? 'line-through'
                                : 'none',
                        }}
                    >
                        {data.name}
                    </span>
                </div>
                <div>
                    <i
                        className="fas fa-edit text-primary me-3"
                        role="button"
                        onClick={openModal}
                    />
                    <i
                        onClick={() => handleDeleteTask(data.id)}
                        className="fas fa-trash text-danger"
                        role="button"
                    />
                </div>
            </li>
            {isModalOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        // Gradient nền overlay
                        background:
                            'linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.7))',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000,
                    }}
                >
                    <div
                        style={{
                            // Card modal gradient
                            background:
                                'linear-gradient(145deg, #e0f7ff, #c0eaff)',
                            padding: '20px',
                            borderRadius: '15px',
                            width: '300px',
                            boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
                            border: '1px solid #0d6efd', // optional viền gradient nữa cũng đẹp
                        }}
                    >
                        <h5>Chỉnh sửa công việc</h5>
                        <input
                            ref={inputRef}
                            type="text"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '8px 10px',
                                margin: '10px 0',
                                borderRadius: '5px',
                                border: '1px solid #ccc',
                                outline: 'none',
                                transition: '0.2s',
                            }}
                            onFocus={(e) =>
                                (e.currentTarget.style.borderColor = '#0d6efd')
                            }
                            onBlur={(e) =>
                                (e.currentTarget.style.borderColor = '#ccc')
                            }
                        />
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                            }}
                        >
                            <button
                                style={{
                                    padding: '5px 10px',
                                    marginRight: '10px',
                                    cursor: 'pointer',
                                    backgroundColor: '#6c757d',
                                    color: 'white',
                                    border: 'none',
                                }}
                                onClick={closeModal}
                            >
                                Hủy
                            </button>
                            <button
                                style={{
                                    padding: '5px 10px',
                                    cursor: 'pointer',
                                    backgroundColor: '#0d6efd',
                                    color: 'white',
                                    border: 'none',
                                }}
                                onClick={submitUpdate}
                            >
                                Lưu
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
