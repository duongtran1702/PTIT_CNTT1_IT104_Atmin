import { useEffect, useState } from 'react';
import { AiOutlineKey } from 'react-icons/ai';

export default function KeyTracker() {
    const [lastKey, setLastKey] = useState<string>('');

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            setLastKey(e.key);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div
            style={{
                width: '300px',
                margin: '50px auto',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                fontFamily: 'Arial, sans-serif',
                textAlign: 'center',
                backgroundColor: '#fff',
                color: '#1e3a8a',
            }}
        >
            <div
                style={{
                    fontSize: '18px',
                    marginBottom: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                }}
            >
                <AiOutlineKey /> Phím bạn vừa nhấn:
            </div>
            <div
                style={{
                    fontSize: '40px',
                    fontWeight: 'bold',
                    color: '#374151',
                }}
            >
                {lastKey || 'Nhấn phím bất kỳ'}
            </div>
        </div>
    );
}
