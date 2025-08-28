import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

export default function TaskComplete() {
    const context = useContext(TaskContext);
    if (!context) throw new Error('Context k tồn tại');
    const { countTaskCompleted, tasks } = context;

    const len = tasks.length;
    return (
        <>
            {countTaskCompleted === 0 ? (
                <div className="text-center text-danger fw-medium">
                    Chưa có công việc nào hoàn thành
                </div>
            ) : (
                <div className="text-center text-success fw-medium">
                    {countTaskCompleted}/ {len} công việc đã hoàn thành
                </div>
            )}
        </>
    );
}
