import { Outlet, NavLink } from 'react-router-dom';

export const Teams = () => {
    return (
        <div style={{ padding: 20 }}>
            <h2>Teams Page</h2>
            <nav style={{ marginBottom: 20 }}>
                <NavLink
                    to="team1"
                    style={{ marginRight: 10, textDecoration: 'none' }}
                >
                    Team 1
                </NavLink>
                <NavLink
                    to="team2"
                    style={{ marginRight: 10, textDecoration: 'none' }}
                >
                    Team 2
                </NavLink>
            </nav>

            {/* Outlet sẽ render TeamsIndex hoặc Team */}
            <Outlet />
        </div>
    );
};
