import { useState } from 'react';
import Header from './Header';
import ListTask from './ListTask';

export interface Task {
    id: number;
    title: string;
}

export default function StickyNote() {
    const [tasks, setTasks] = useState<Task[]>(() => {
        const dataLocal = localStorage.getItem('tasks');
        if (dataLocal) return JSON.parse(dataLocal);
        return [];
    });

    const handleAdd = (title: string) => {
        const newTask = { id: Math.floor(Math.random() * 10000), title: title };
        const tasksTmp = [...tasks, newTask];
        setTasks(tasksTmp);
        localStorage.setItem('tasks', JSON.stringify(tasksTmp));
    };

    const handleDelete = (id: number) => {
        const tasksTmp = tasks.filter((t) => t.id !== id);
        setTasks(tasksTmp);
        localStorage.setItem('tasks', JSON.stringify(tasksTmp));
    };
    return (
        <div className="flex justify-center items-center m-10 flex-col ">
            <Header onAdd={handleAdd} />
            <ListTask data={tasks} onDelete={handleDelete} />
        </div>
    );
}
