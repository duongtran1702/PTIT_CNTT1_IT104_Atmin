import { NavLink, Outlet } from 'react-router-dom';

export default function Bai1() {
    const listPage = [
        { path: 'home', label: 'Home' },
        { path: 'about', label: 'About' },
        { path: 'contact', label: 'Contact' },
    ];
    return (
        <div>
            <nav
                style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    backgroundColor: '#007BFF',
                    padding: 10,
                    borderRadius: 5,
                }}
            >
                {listPage.map((p) => (
                    <NavLink
                        key={p.path}
                        to={p.path}
                        style={({ isActive }) => ({
                            color: isActive ? '#fffff' : '#ffffff',
                            fontWeight: isActive ? '500' : '500',
                            textDecoration: isActive ? 'underline' : 'none',
                        })}
                    >
                        {p.label}
                    </NavLink>
                ))}
            </nav>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: 80,
                }}
            >
                <Outlet />
            </div>
        </div>
    );
}
