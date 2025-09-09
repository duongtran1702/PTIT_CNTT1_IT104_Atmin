import { NavLink, Outlet } from 'react-router-dom';

export default function Bai2() {
    return (
        <div>
            <nav style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <NavLink to="/bai2" style={{ textDecoration: 'none' }}>
                    Home
                </NavLink>
                <NavLink to="/bai2/about" style={{ textDecoration: 'none' }}>
                    About
                </NavLink>
                <NavLink to="/bai2/contact" style={{ textDecoration: 'none' }}>
                    Contact
                </NavLink>
            </nav>

            <Outlet />
        </div>
    );
}
