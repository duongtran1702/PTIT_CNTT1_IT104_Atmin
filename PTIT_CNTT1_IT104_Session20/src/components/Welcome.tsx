import { useEffect } from 'react';

export default function Welcome() {
    useEffect(() => {
        console.log('Component đã được render lần đầu');
    }, []);

    const styles: React.CSSProperties = {
        display: 'inline-block', // vừa khít nội dung
        padding: '10px 20px',
        borderRadius: '12px',
        background: 'linear-gradient(135deg, #74ebd5 0%, #9face6 100%)',
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#333',
        boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
        margin: 20,
    };

    return (
        <div>
            <div style={styles}>
                Chào mừng đến với ứng dụng của chúng tôi 🚀
            </div>
        </div>
    );
}
