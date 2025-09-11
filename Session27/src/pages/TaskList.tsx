import { TaskCard } from '../components/TaskCard';

export interface Task {
    id: number;
    title: string;
    description: string;
}

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
export const TaskList = () => {
    return (
        <div
            style={{
                display: 'flex',
                gap: 10,
                flexDirection: 'column',
                marginTop: 20,
            }}
        >
            {tasks.map((p) => (
                <TaskCard key={p.id} data={p} />
            ))}
        </div>
    );
};
