import { useEffect, useState } from 'react';

export default function PageTitle() {
    const [username, setUsername] = useState<string>('');

    // Cập nhật tiêu đề trang khi username thay đổi
    useEffect(() => {
        if (username.trim() === '') {
            document.title = 'Trang chào mừng 🚀';
        } else {
            document.title = `Xin chào, ${username}! 👋`;
        }
    }, [username]);

    const styles: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
        fontFamily: 'Arial, sans-serif',
    };

    const boxStyle: React.CSSProperties = {
        padding: '30px 40px',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, #0cc641ff 0%, #1381e0ff 100%)',
        boxShadow: '0 6px 18px rgba(0,0,0,0.2)',
        textAlign: 'center',
        width: '350px',
        color: '#fff',
    };

    const inputStyles: React.CSSProperties = {
        padding: '10px 15px',
        fontSize: '16px',
        borderRadius: '8px',
        border: 'none',
        outline: 'none',
        width: '90%',
        backgroundColor: 'rgba(255,255,255,0.9)',
        color: '#333',
    };

    return (
        <div style={styles}>
            <div style={boxStyle}>
                <h3>Chào mừng bạn đến với ứng dụng của chúng tôi</h3>
                <input
                    type="text"
                    placeholder="Nhập tên ..."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={inputStyles}
                />
            </div>
        </div>
    );
}
