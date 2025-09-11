import { Link } from 'react-router-dom';
import type { Task } from '../pages/TaskList';

interface TaskProp {
    data: Task;
}

export const TaskCard = ({ data }: TaskProp) => {
    return (
        <div
            style={{
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                padding: '10px',
                width: '300px',
                backgroundColor: '#fff',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                textAlign: 'center',
                height: 130,
            }}
        >
            <h3
                style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    marginBottom: '10px',
                }}
            >
                {data.title}
            </h3>
            <p style={{ marginBottom: '15px', color: '#333' }}>
                {data.description}
            </p>
            <Link
                to={`/bai3/taskDetail/${data.id}`}
                style={{ color: '#1677ff', textDecoration: 'none' }}
            >
                Xem chi tiết
            </Link>
        </div>
    );
};
