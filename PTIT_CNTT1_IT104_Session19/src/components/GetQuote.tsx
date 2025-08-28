import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

interface Quote {
    saying: string;
}

const quotes: Quote[] = [
    { saying: 'Học, học nữa, học mãi' },
    { saying: 'Thất bại là mẹ thành công' },
    { saying: 'Không gì là không thể' },
    { saying: 'Kiến tha lâu đầy tổ' },
    { saying: 'Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau' },
];

export default function GetQuote() {
    const [index, setIndex] = useState(0);

    const handleChangeQuote = () => {
        let nextIndex: number;
        do {
            nextIndex = Math.floor(Math.random() * quotes.length);
        } while (nextIndex === index); 
        setIndex(nextIndex);
    };

    return (
        <div
            style={{
                width: '360px',
                margin: '50px auto',
                padding: '25px',
                borderRadius: '15px',
                boxShadow: '0 6px 15px rgba(0,0,0,0.15)',
                fontFamily: 'Arial, sans-serif',
                textAlign: 'center',
                backgroundColor: '#ffffff',
            }}
        >
            <h3
                style={{
                    color: '#1e3a8a',
                    marginBottom: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    fontSize: '20px',
                }}
            >
                <AiFillStar /> Câu nói truyền cảm hứng hôm nay
            </h3>

            <div
                style={{
                    fontStyle: 'italic',
                    marginBottom: '25px',
                    fontSize: '16px',
                    lineHeight: '1.5',
                    color: '#374151',
                }}
            >
                "{quotes[index].saying}"
            </div>

            <button
                onClick={handleChangeQuote}
                style={{
                    padding: '10px 20px',
                    borderRadius: '10px',
                    border: 'none',
                    backgroundColor: '#1e3a8a',
                    color: '#fff',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '14px',
                    transition: 'background-color 0.3s',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#3b82f6';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#1e3a8a';
                }}
            >
                Get new saying
            </button>
        </div>
    );
}
