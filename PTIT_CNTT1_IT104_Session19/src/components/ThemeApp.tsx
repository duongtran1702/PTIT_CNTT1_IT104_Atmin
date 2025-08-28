import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function ThemeApp() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const lightStyle: React.CSSProperties = {
        backgroundColor: '#fefefe',
        color: '#222',
        padding: '20px 30px',
        width: '250px',
        borderRadius: '15px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        textAlign: 'center',
        fontFamily: 'sans-serif',
    };

    const darkStyle: React.CSSProperties = {
        backgroundColor: '#222',
        color: '#fefefe',
        padding: '20px 30px',
        width: '250px',
        borderRadius: '15px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
        textAlign: 'center',
        fontFamily: 'sans-serif',
    };

    const buttonStyle: React.CSSProperties = {
        marginTop: '15px',
        padding: '8px 16px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
        backgroundColor: theme === 'light' ? '#222' : '#fefefe',
        color: theme === 'light' ? '#fefefe' : '#222',
        transition: 'all 0.3s ease',
    };

    const containerStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <div style={containerStyle}>
            <div style={theme === 'light' ? lightStyle : darkStyle}>
                <h2>My Theme App</h2>
                <button style={buttonStyle} onClick={toggleTheme}>
                    Toggle Theme
                </button>
                <div style={{ marginTop: '10px', fontSize: '14px' }}>
                    Current Theme: {theme.toUpperCase()}
                </div>
            </div>
        </div>
    );
}
