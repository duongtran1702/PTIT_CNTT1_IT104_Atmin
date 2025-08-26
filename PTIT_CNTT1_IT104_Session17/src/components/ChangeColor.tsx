import { useState } from 'react';

function getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export default function ChangeColor() {
    const [colorCode, setColorCode] = useState<string>('#161616');

    const changeColor = (): void => {
        setColorCode(getRandomColor()); // gọi hàm để lấy giá trị
    };

    return (
        <div
            style={{
                width: 350,
                margin: '50px auto',
                padding: 25,
                borderRadius: 16,
                textAlign: 'center',
                background: '#f0f4ff',
                boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
                fontFamily: 'Arial, sans-serif',
            }}
        >
            <h2 style={{ color: colorCode, marginBottom: 20 }}>
                Tiêu đề văn bản
            </h2>
            <button
                onClick={changeColor}
                style={{
                    padding: '12px 25px',
                    borderRadius: 12,
                    border: 'none',
                    background: '#3B82F6',
                    color: '#fff',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontSize: 16,
                    transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = 'scale(1.05)')
                }
                onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = 'scale(1)')
                }
            >
                Thay đổi màu
            </button>
        </div>
    );
}
