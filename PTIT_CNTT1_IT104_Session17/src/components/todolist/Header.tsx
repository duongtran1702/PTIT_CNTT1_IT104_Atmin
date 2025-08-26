import { useState, type ChangeEvent, type FormEvent } from 'react';

interface ChildProp {
    addWork: (title: string) => void;
}

export default function Header({ addWork }: ChildProp) {
    const [content, setContent] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
    };

    const resetInput = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (content.trim() === '') return;
        addWork(content);
        setContent('');
    };

    return (
        <form style={{ textAlign: 'center' }} onSubmit={resetInput}>
            <h2 style={{ marginBottom: 20 }}>📋 Danh sách công việc</h2>
            <div style={{ display: 'flex', gap: 10 }}>
                <input
                    type="text"
                    value={content}
                    onChange={handleChange}
                    placeholder="Nhập công việc..."
                    style={{
                        flex: 1,
                        padding: 10,
                        borderRadius: 8,
                        border: 'none',
                        outline: 'none',
                        fontSize: 14,
                    }}
                />
                <button
                    type="submit"
                    style={{
                        padding: '10px 16px',
                        borderRadius: 8,
                        border: 'none',
                        background: '#ff9800',
                        color: 'white',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        transition: '0.3s',
                    }}
                >
                    Thêm
                </button>
            </div>
        </form>
    );
}
