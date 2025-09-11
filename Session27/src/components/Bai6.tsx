import { NavLink, Outlet } from 'react-router-dom';

export const Bai6 = () => {
    return (
        <div>
            <nav style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                <NavLink
                    to="/bai6/home"
                    style={({ isActive }) => ({
                        textDecoration: 'none',
                        color: isActive ? 'red' : 'black',
                        fontWeight: isActive ? 'bold' : 'normal',
                        borderBottom: isActive ? '2px solid red' : 'none',
                        paddingBottom: '4px',
                    })}
                >
                    Home
                </NavLink>

                <NavLink
                    to="/bai6/product"
                    style={({ isActive }) => ({
                        textDecoration: 'none',
                        color: isActive ? 'red' : 'black',
                        fontWeight: isActive ? 'bold' : 'normal',
                        borderBottom: isActive ? '2px solid red' : 'none',
                        paddingBottom: '4px',
                    })}
                >
                    Product
                </NavLink>

                <NavLink
                    to="/bai6/detail"
                    style={({ isActive }) => ({
                        textDecoration: 'none',
                        color: isActive ? 'red' : 'black',
                        fontWeight: isActive ? 'bold' : 'normal',
                        borderBottom: isActive ? '2px solid red' : 'none',
                        paddingBottom: '4px',
                    })}
                >
                    Detail
                </NavLink>
            </nav>

            <Outlet />
        </div>
    );
};
