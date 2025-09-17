import { useNavigate, useParams } from 'react-router-dom';
import type { Task } from './TaskList';
import { Button } from 'antd';
const tasks: Task[] = [
    {
        id: 1,
        title: 'Học React Router',
        description: 'Làm quen với Dynamic Routes và useNavigate',
    },
    {
        id: 2,
        title: 'Ôn lại Tailwind',
        description: 'Thực hành tạo UI cơ bản bằng Tailwind CSS',
    },
    {
        id: 3,
        title: 'Hoàn thành BTVN',
        description: 'Đẩy code lên GitHub và nộp link',
    },
];
export const TaskDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const task = tasks.find((p) => p.id === Number(id));

    if (!task) {
        return (
            <h2
                style={{ padding: '20px', color: 'red', textAlign: 'center' }}
            ></h2>
        );
    }

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#fff', // nền trắng
                padding: '40px',
            }}
        >
            <div
                style={{
                    maxWidth: '600px',
                    width: '100%',
                    padding: '30px',
                    borderRadius: '16px',
                    background:
                        'linear-gradient(135deg, #ff9a9e, #ff6a88, #ff99ac, #fad0c4, #fbc2eb, #a18cd1)',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
                    color: '#fff',
                    lineHeight: 1.6,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                    e.currentTarget.style.boxShadow =
                        '0 10px 30px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow =
                        '0 6px 20px rgba(0,0,0,0.25)';
                }}
            >
                <h2
                    style={{
                        marginBottom: '15px',
                        fontSize: '26px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}
                >
                    {task.title}
                </h2>
                <p style={{ fontSize: '16px', marginBottom: '12px' }}>
                    <strong>Mô tả:</strong> {task.description}
                </p>
                
                <div style={{ textAlign: 'center' }}>
                    <Button
                        type="primary"
                        size="large"
                        onClick={() => navigate(-1)}
                        style={{
                            backgroundColor: '#fff',
                            color: '#d81b60',
                            fontWeight: 'bold',
                            borderRadius: '8px',
                            border: 'none',
                        }}
                    >
                        ⬅ Quay lại danh sách
                    </Button>
                </div>
            </div>
        </div>
    );
};
