import { NavLink, Outlet } from 'react-router-dom';

const navLinkItems = [
    { path: '/bai1', label: 'Bài 1' },
    { path: '/bai2', label: 'Bài 2' },
    { path: '/bai3', label: 'Bài 3' },
    { path: '/bai4', label: 'Bài 4' },
    { path: '/blog', label: 'Bài 5' },
    { path: '/bai6', label: 'Bài 6' },
    { path: '/bai7', label: 'Bài 7' },
    { path: '/bai8', label: 'Bài 8' },
];

function App() {
    return (
        <>
            <nav style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                {navLinkItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        style={({ isActive }) => ({
                            color: isActive ? '#1890ff' : 'gray',
                            fontWeight: isActive ? 'bold' : 'normal',
                            textDecoration: 'none',
                        })}
                    >
                        {item.label}
                    </NavLink>
                ))}
            </nav>

            <Outlet />
        </>
    );
}

export default App;
