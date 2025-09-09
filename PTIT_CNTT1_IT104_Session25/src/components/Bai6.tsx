import { NavLink, Outlet } from 'react-router-dom';

export const Bai6 = () => {
    return (
        <div>
            <nav style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <NavLink to="/bai6" style={{ textDecoration: 'none' }}>
                    Home
                </NavLink>
                <NavLink to="/bai6/product" style={{ textDecoration: 'none' }}>
                    Product
                </NavLink>
                <NavLink to="/bai6/detail" style={{ textDecoration: 'none' }}>
                    Detail
                </NavLink>
            </nav>

            <Outlet />
        </div>
    );
};
