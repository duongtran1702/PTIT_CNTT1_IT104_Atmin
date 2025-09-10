import { NavLink, Outlet } from 'react-router-dom';

export default function Bai1() {
    return (
        <div>
            <nav style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <NavLink to="/bai1" >
                    Home
                </NavLink>
                <NavLink to="/bai1/about" style={{ textDecoration: 'none' }}>
                    About
                </NavLink>
                <NavLink to="/bai1/contact" style={{ textDecoration: 'none' }}>
                    Contact
                </NavLink>
            </nav>

            <Outlet />
        </div>
    );
}
