import { Outlet } from 'react-router-dom';

export const Bai3 = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <h1>List Task</h1>
            <Outlet />
        </div>
    );
};
