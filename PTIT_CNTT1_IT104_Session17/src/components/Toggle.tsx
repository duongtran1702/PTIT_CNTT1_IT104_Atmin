import { useState } from 'react';

export default function Toggle() {
    const [status, setStatus] = useState<boolean>(true);
    const toggle = () => setStatus((prev) => !prev);

    return (
        <div
            style={{
                width: 350,
                margin: '50px auto',
                padding: 25,
                borderRadius: 16,
                background: '#f0f4ff',
                boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
                textAlign: 'center' as const,
                fontFamily: 'Arial, sans-serif',
            }}
        >
            <div
                style={{
                    height: 50,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 22,
                    fontWeight: 600,
                    color: '#111',
                    transition: 'all 0.3s ease',
                }}
            >
                {status && 'Hello Admin'}
            </div>

            <button
                onClick={toggle}
                style={{
                    padding: '12px 25px',
                    borderRadius: 12,
                    border: 'none',
                    background: '#3B82F6',
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: 16,
                    cursor: 'pointer',
                    marginTop: 20,
                    transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = 'scale(1.05)')
                }
                onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = 'scale(1)')
                }
            >
                {status ? 'Hide' : 'Show'}
            </button>
        </div>
    );
}
