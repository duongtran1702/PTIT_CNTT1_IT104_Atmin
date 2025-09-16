import { useCallback, useEffect, useState } from 'react';
import {
    Card,
    Input,
    Button,
    Checkbox,
    Space,
    List,
    Typography,
    message,
    Modal,
} from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';
import { PacmanLoader } from 'react-spinners';

const { Title } = Typography;

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

const ToDoApp = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [text, setText] = useState<string>('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [taskTemp, setTaskTemp] = useState<Task | null>(null);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>(
        'all'
    );
    const [typeDelete, setTypeDelete] = useState<
        'allTask' | 'allTaskCompleted' | null
    >(null);
    const [mode, setMode] = useState<'add' | 'update'>('add');

    const showModal = (task: Task) => {
        setIsModalOpen(true);
        setTaskTemp(task);
    };

    const showModal2 = (type: 'allTask' | 'allTaskCompleted') => {
        setIsModalOpen(true);
        setTypeDelete(type);
    };

    const handleDelete = async (id: number) => {
        try {
            const res = await axios.delete(
                `http://localhost:8080/todolist/${id}`
            );
            if (res.status === 200) {
                setTasks((prev) => prev.filter((task) => task.id !== id));
                message.success('Xóa thành công!');
            }
        } catch (error) {
            console.error('Lỗi khi xóa:', error);
        }
    };

    const handleDelete2 = async () => {
        try {
            if (typeDelete === 'allTaskCompleted') {
                const ids: number[] = tasks
                    .filter((tmp) => tmp.completed)
                    .map((tmp) => tmp.id);
                await Promise.all(
                    ids.map((id) =>
                        axios.delete(`http://localhost:8080/todolist/${id}`)
                    )
                );
                setTasks((pre) =>
                    pre.filter((task) => task.completed === false)
                );
            } else {
                await Promise.all(
                    tasks.map((task) =>
                        axios.delete(
                            `http://localhost:8080/todolist/${task.id}`
                        )
                    )
                );
                setTasks([]);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleOk = () => {
        setIsModalOpen(false);
        if (taskTemp !== null) {
            handleDelete(taskTemp.id);
            setTaskTemp(null);
        }
        if (typeDelete !== null) {
            handleDelete2();
            setTypeDelete(null);
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setTypeDelete(null);
    };

    const loadTasks = useCallback(
        async (criterial: 'all' | 'completed' | 'pending') => {
            let url = 'http://localhost:8080/todolist';
            if (criterial === 'completed') url += '?completed=true';
            else if (criterial === 'pending') url += '?completed=false';
            const timer = setTimeout(() => setLoading(true), 500);
            try {
                const response = await axios.get(url);

                setTasks(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                clearTimeout(timer);
                setLoading(false);
            }
        },
        []
    );

    const addTask = async (text: string) => {
        if (!text.trim()) {
            message.warning('Tên công việc không được để trống!');
            return;
        }

        let newTask: Task = {
            id: Math.floor(Math.random() * 500),
            text,
            completed: false,
        };
        if (mode === 'update' && taskTemp) {
            newTask = {
                ...newTask,
                id: taskTemp.id,
                completed: taskTemp.completed,
            };
            try {
                await axios.patch(
                    `http://localhost:8080/todolist/${taskTemp.id}`,
                    newTask
                );
                setTasks((pre) =>
                    pre.map((t) => (t.id === taskTemp.id ? newTask : t))
                );
                message.success('Cập nhật công việc thành công!');
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                const response = await axios.post(
                    'http://localhost:8080/todolist',
                    newTask
                );
                if (response.status === 201) {
                    setTasks((prev) => [...prev, response.data]);
                    message.success('Thêm công việc thành công !');
                }
            } catch (error) {
                console.log(error);
            }
        }

        setText('');
        setMode('add');
        setTaskTemp(null);
    };

    const handleFilter = (criterial: 'all' | 'completed' | 'pending') => {
        setFilter(criterial);
        loadTasks(criterial);
    };

    useEffect(() => {
        loadTasks('all');
    }, [loadTasks]);

    const handleChangeStatus = async (task: Task) => {
        const updateTask: Task = { ...task, completed: !task.completed };
        setTasks((prev) =>
            prev
                .map((t) => (t.id === task.id ? updateTask : t))
                .filter((t) => {
                    if (filter === 'completed') return t.completed;//===true
                    if (filter === 'pending') return !t.completed;//===false
                    return true;
                })
        );

        try {
            await axios.patch(
                `http://localhost:8080/todolist/${task.id}`,
                updateTask
            );
        } catch (error) {
            console.log(error);
            loadTasks(filter);
        }
    };

    const handleUpdate = async (task: Task) => {
        console.log(task);
        setMode('update');
        setText(task.text);
        setTaskTemp(task);
    };

    return (
        <div
            style={{
                maxWidth: 450,
                margin: '0 auto',
                padding: '10px',
                backgroundColor: '#f5f5f5',
                height: 'fit-content',
                borderRadius: 10,
                position: 'relative', // 👈 thêm dòng này
            }}
        >
            <Card
                style={{
                    borderRadius: '12px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}
            >
                <Title
                    level={2}
                    style={{ textAlign: 'center', marginBottom: '24px' }}
                >
                    Quản lý công việc
                </Title>

                {/* Form thêm công việc */}
                <Card
                    size="small"
                    style={{
                        backgroundColor: '#fafafa',
                        marginBottom: '16px',
                        borderRadius: '8px',
                    }}
                >
                    <Space
                        direction="vertical"
                        style={{ width: '100%' }}
                        size="middle"
                    >
                        <Input
                            value={text}
                            style={{ width: '100%' }}
                            placeholder="Nhập tên công việc"
                            onChange={(e) => setText(e.target.value)}
                        />
                        <Button
                            type="primary"
                            icon={
                                mode === 'add' ? (
                                    <PlusOutlined />
                                ) : (
                                    <EditOutlined />
                                )
                            }
                            style={{
                                backgroundColor: '#4F7FE6',
                                width: '100%',
                            }}
                            onClick={() => addTask(text)}
                        >
                            {mode === 'add'
                                ? 'Thêm công việc'
                                : 'Cập nhật công việc'}
                        </Button>
                    </Space>
                </Card>

                {/* Bộ lọc */}
                <Card
                    size="small"
                    style={{
                        marginBottom: '16px',
                    }}
                >
                    <Space wrap>
                        <Button
                            type={filter === 'all' ? 'primary' : 'default'}
                            onClick={() => handleFilter('all')}
                            style={
                                filter === 'all'
                                    ? { backgroundColor: '#4F7FE6' }
                                    : {}
                            }
                        >
                            Tất cả
                        </Button>
                        <Button
                            type={
                                filter === 'completed' ? 'primary' : 'default'
                            }
                            onClick={() => handleFilter('completed')}
                            style={
                                filter === 'completed'
                                    ? { backgroundColor: '#4F7FE6' }
                                    : {}
                            }
                        >
                            Hoàn thành
                        </Button>
                        <Button
                            type={filter === 'pending' ? 'primary' : 'default'}
                            onClick={() => handleFilter('pending')}
                            style={
                                filter === 'pending'
                                    ? { backgroundColor: '#4F7FE6' }
                                    : {}
                            }
                        >
                            Đang thực hiện
                        </Button>
                    </Space>
                </Card>

                {/* Danh sách công việc */}
                <div className="scroll-container">
                    <List
                        dataSource={tasks}
                        renderItem={(task) => (
                            <List.Item
                                style={{
                                    backgroundColor: '#fff',
                                    marginBottom: '8px',
                                    borderRadius: '8px',
                                    border: '1px solid #f0f0f0',
                                    padding: '12px 16px',
                                }}
                                actions={[
                                    <Button
                                        type="text"
                                        icon={<EditOutlined />}
                                        size="small"
                                        style={{ color: '#faad14' }}
                                        onClick={() => handleUpdate(task)}
                                    />,
                                    <Button
                                        type="text"
                                        icon={<DeleteOutlined />}
                                        size="small"
                                        style={{ color: '#ff4d4f' }}
                                        onClick={() => showModal(task)}
                                    />,
                                ]}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flex: 1,
                                    }}
                                >
                                    <Checkbox
                                        checked={task.completed}
                                        onChange={() =>
                                            handleChangeStatus(task)
                                        }
                                        style={{ marginRight: '12px' }}
                                    />
                                    <span
                                        style={{
                                            textDecoration: task.completed
                                                ? 'line-through'
                                                : 'none',
                                            color: task.completed
                                                ? '#999'
                                                : '#000',
                                            flex: 1,
                                        }}
                                    >
                                        {task.text}
                                    </span>
                                </div>
                            </List.Item>
                        )}
                    />
                </div>

                {/* Nút hành động */}
                <div style={{ marginTop: '20px' }}>
                    <Space
                        style={{
                            width: '100%',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Button
                            danger
                            style={{
                                backgroundColor: '#ff4d4f',
                                borderColor: '#ff4d4f',
                                color: '#fff',
                            }}
                            onClick={() => showModal2('allTaskCompleted')}
                        >
                            Xóa công việc hoàn thành
                        </Button>
                        <Button
                            danger
                            style={{
                                backgroundColor: '#ff4d4f',
                                borderColor: '#ff4d4f',
                                color: '#fff',
                            }}
                            onClick={() => showModal2('allTask')}
                        >
                            Xóa tất cả công việc
                        </Button>
                    </Space>
                </div>
                <Modal
                    width={350}
                    title="Delete student"
                    closable={true}
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    okText="Xóa"
                    cancelText="Hủy"
                >
                    {typeDelete === null ? (
                        <p>Bạn có muốn xóa công việc {taskTemp?.text} ?</p>
                    ) : (
                        <p>
                            {typeDelete === 'allTask'
                                ? 'Bạn muốn xóa tất cả công việc ?'
                                : 'Bạn muốn xóa tất cả công việc hoàn thành'}
                        </p>
                    )}
                </Modal>
            </Card>
            {loading && (
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                            'linear-gradient(rgba(0,0,0,0.1), rgba(50,50,50,0.1))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 8,
                        zIndex: 10,
                    }}
                >
                    <PacmanLoader color="#832bba" />
                </div>
            )}
        </div>
    );
};

export default ToDoApp;
