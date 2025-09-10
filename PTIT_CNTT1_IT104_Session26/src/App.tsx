import { NavLink, Outlet } from 'react-router-dom';

function App() {
    return (
        <>
            <nav style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <NavLink
                    to="/bai5"
                    style={({ isActive }) => ({
                        color: isActive ? 'red' : 'black',
                        fontWeight: isActive ? 'bold' : 'normal',
                        textDecoration: 'none',
                    })}
                >
                    Bai 5
                </NavLink>

                <NavLink
                    to="/teams"
                    style={({ isActive }) => ({
                        color: isActive ? 'red' : 'black',
                        fontWeight: isActive ? 'bold' : 'normal',
                        textDecoration: 'none',
                    })}
                >
                    Bai 7
                </NavLink>

                <NavLink
                    to="/bai8"
                    style={({ isActive }) => ({
                        color: isActive ? 'red' : 'black',
                        fontWeight: isActive ? 'bold' : 'normal',
                        textDecoration: 'none',
                    })}
                >
                    Bai 8
                </NavLink>
            </nav>

            <Outlet />
        </>
    );
}

export default App;
