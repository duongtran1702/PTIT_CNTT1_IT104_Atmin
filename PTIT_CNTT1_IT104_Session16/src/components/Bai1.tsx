import { Component } from 'react';
import { FaBook } from 'react-icons/fa';

export default class Bai1 extends Component {
    render() {
        const subjects = ['Toán', 'Văn', 'Anh', 'Hóa', 'Sinh'];

        const containerStyle: React.CSSProperties = {
            textAlign: 'center',
            backgroundColor: '#222',
            height: 'fit-content',
            padding: '30px',
            width: '300px',
            borderRadius: '20px',
            margin: '20px auto',
            boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
        };

        const titleStyle: React.CSSProperties = {
            fontSize: '2rem',
            color: '#f1f1f1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '25px',
        };

        const listStyle: React.CSSProperties = {
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            alignItems: 'center',
        };

        const buttonStyle: React.CSSProperties = {
            background: 'linear-gradient(135deg, #ffd166, #06d6a0)',
            border: 'none',
            padding: '12px 60px',
            fontSize: '1.1rem',
            borderRadius: '12px',
            cursor: 'pointer',
            color: '#222',
            fontWeight: 600,
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            transition: 'all 0.2s ease',
        };

        return (
            <div style={containerStyle}>
                <h1 style={titleStyle}>
                    <FaBook size={32} color="#ffd166" />
                    Danh sách môn học
                </h1>

                <div style={listStyle}>
                    {subjects.map((subject, index) => (
                        <button
                            key={index}
                            style={buttonStyle}
                            onMouseEnter={(e) => {
                                const btn = e.currentTarget;
                                btn.style.transform = 'scale(1.08)';
                                btn.style.boxShadow = '0 6px 12px rgba(0,0,0,0.3)';
                            }}
                            onMouseLeave={(e) => {
                                const btn = e.currentTarget;
                                btn.style.transform = 'scale(1)';
                                btn.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
                            }}
                        >
                            {subject}
                        </button>
                    ))}
                </div>
            </div>
        );
    }
}
