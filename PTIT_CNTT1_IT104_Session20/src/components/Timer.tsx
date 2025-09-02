import { useEffect, useState } from 'react';

export default function Timer() {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
            console.log("⏱️ Timer đã dừng khi component unmount");
        };
    }, []);

    const boxStyles: React.CSSProperties = {
        margin: '20px', // 👈 chỉ margin ngoài 20px
        background: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
        color: '#fff',
        padding: '12px 18px',
        borderRadius: '12px',
        fontSize: '16px',
        fontWeight: 'bold',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
        display: 'inline-block', // giữ box gọn gàng
    };

    return (
        <div style={boxStyles}>
            ⏱️ {count} giây
        </div>
    );
}
