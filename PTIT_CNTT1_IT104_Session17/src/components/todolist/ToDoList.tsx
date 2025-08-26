import { useEffect, useState } from 'react';
import Header from './Header';
import Task from './Task';

export interface Work {
    id: number;
    isCompleted: boolean;
    title: string;
}

export default function ToDoList() {
    const getInitialList = (): Work[] => {
        const saved = localStorage.getItem('todo-list');
        return saved ? JSON.parse(saved) : [];
    };

    const [list, setList] = useState<Work[]>(getInitialList());
    let idx = list.length > 0 ? Math.max(...list.map((w) => w.id)) + 1 : 1;

    useEffect(() => {
        localStorage.setItem('todo-list', JSON.stringify(list));
    }, [list]);

    const addWork = (title: string) => {
        const newWork: Work = { id: idx++, isCompleted: false, title: title };
        setList([...list, newWork]);
    };

    const deleteWork = (id: number) => {
        setList(list.filter((w) => w.id !== id));
    };

    const toggleWork = (id: number) => {
        setList(
            list.map((w) =>
                w.id === id ? { ...w, isCompleted: !w.isCompleted } : w
            )
        );
    };

    return (
        <div
            style={{
                width: 400,
                margin: '50px auto',
                padding: 20,
                borderRadius: 16,
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                color: 'white',
                boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
                fontFamily: 'Arial, sans-serif',
            }}
        >
            <Header addWork={addWork} />
            <ul style={{ listStyle: 'none', padding: 0, marginTop: 20 }}>
                {list.map((work) => (
                    <Task
                        key={work.id}
                        task={work}
                        onDelete={deleteWork}
                        onToggle={toggleWork}
                    />
                ))}
            </ul>
        </div>
    );
}
