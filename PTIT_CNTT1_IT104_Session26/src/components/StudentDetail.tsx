import { Button, Input } from 'antd';
import { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

export const StudentDetail = () => {
    const { name } = useParams();
    const [searchQuery, setSearchQuery] = useSearchParams();
    const nameQuery = searchQuery.get('name');
    
    const [text, setText] = useState<string>('');
    const handleSubmit = () => {
        setSearchQuery({ name: text });
    };
    return (
        <div>
            <div style={{ fontWeight: 600 }}>Name : {name}</div>
            <div
                style={{
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'center',
                    padding: '10px',
                    borderRadius: '8px',
                    maxWidth: '400px',
                }}
            >
                <Input
                    placeholder="Enter text..."
                    style={{
                        border: '1px solid #d9d9d9',
                        borderRadius: '6px',
                        flex: 1,
                        padding: '8px 12px',
                        transition: 'all 0.3s ease',
                    }}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <Button
                    style={{
                        background: '#1677ff',
                        borderRadius: '6px',
                        padding: '0 20px',
                        height: '40px',
                        boxShadow: '0 2px 6px rgba(22, 119, 255, 0.4)',
                    }}
                    type="primary"
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </div>

            <div style={{ fontWeight: 600 }}>
                Name search query : {nameQuery}
            </div>
        </div>
    );
};
