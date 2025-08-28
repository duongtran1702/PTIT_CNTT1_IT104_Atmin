import { useEffect, useRef, useState } from 'react';

export default function RenderCount() {
    const [content, setContent] = useState('');
    const countRender = useRef(0);

    useEffect(() => {
        countRender.current += 1;
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
    };

    const containerStyle: React.CSSProperties = {
        width: '280px',
        padding: '20px',
        margin: '50px auto',
        borderRadius: '15px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#fff0f5',
    };

    const inputStyle: React.CSSProperties = {
        padding: '8px 12px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        outline: 'none',
        width: '80%',
        marginTop: '10px',
    };

    const countStyle: React.CSSProperties = {
        marginTop: '15px',
        fontWeight: 'bold',
        color: '#d6336c',
    };

    return (
        <div style={containerStyle}>
            <h2 style={{ color: '#d6336c', marginBottom: '10px' }}>
                Render Counter 💖
            </h2>
            <input
                type="text"
                value={content}
                onChange={handleChange}
                placeholder="Type something..."
                style={inputStyle}
            />
            <div style={countStyle}>Times render: {countRender.current}</div>
        </div>
    );
}
