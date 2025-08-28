import { useCallback, useEffect, useMemo, useReducer } from 'react';
import { TaskContext } from './TaskContext';
import TodoList from '../components/TodoList';
import type { Task } from '../interfaces/task.interface';
import { taskReducer } from '../reducers/taskReducer';

export default function TaskContextProvider() {
    const taskListLocal = localStorage.getItem('taskList');
    const data = (taskListLocal && JSON.parse(taskListLocal)) || [];
    const [tasks, dispatch] = useReducer(taskReducer, data);

    useEffect(
        () => localStorage.setItem('taskList', JSON.stringify(tasks)),
        [tasks]
    );
    const handleAddTask = useCallback((task: Task) => {
        dispatch({ type: 'ADD_TASK', payload: task });
    }, []);

    const handleUpdateTask = useCallback(
        (id: number | string, name: string) => {
            dispatch({ type: 'UPDATE_TASK', payload: { id, name } });
        },
        []
    );

    const handleDeleteTask = useCallback((id: number | string) => {
        dispatch({ type: 'DELETE_TASK', payload: { id } });
    }, []);

    const handleToggleTask = useCallback((id: number | string) => {
        dispatch({ type: 'TOGGLE_TASK', payload: { id } });
    }, []);
    //useCallBack
    const countTaskCompleted = useMemo(() => {
        return tasks.filter((t: Task) => t.isCompleted).length;
    }, [tasks]);

    return (
        <TaskContext.Provider
            value={{
                tasks,
                handleAddTask,
                handleUpdateTask,
                handleDeleteTask,
                handleToggleTask,
                countTaskCompleted,
            }}
        >
            <TodoList />
        </TaskContext.Provider>
    );
}
