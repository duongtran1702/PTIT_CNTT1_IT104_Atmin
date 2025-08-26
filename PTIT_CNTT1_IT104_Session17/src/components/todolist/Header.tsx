import { useState, type ChangeEvent, type FormEvent } from 'react';

interface ChildProp {
    addWork: (title: string) => void;
}

export default function Header({ addWork }: ChildProp) {
    const [content, setContent] = useState<string>('');
    const [error, setError] = useState<string>(''); // state lưu thông báo lỗi

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
        if (error) setError(''); // reset lỗi khi người dùng nhập
    };

    const resetInput = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (content.trim() === '') {
            setError('⚠️ Vui lòng nhập công việc !');
            return;
        }
        addWork(content);
        setContent('');
        setError('');
    };

    return (
        <form style={{ textAlign: 'center' }} onSubmit={resetInput}>
            <h2 style={{ marginBottom: 20 }}>📋 Danh sách công việc</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
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
                            border: error ? '1px solid red' : 'none',
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
                {error && (
                    <span style={{ color: '#76CBFF', fontSize: 13, textAlign: 'left' }}>
                        {error}
                    </span>
                )}
            </div>
        </form>
    );
}
