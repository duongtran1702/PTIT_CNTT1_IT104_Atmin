import { useState } from 'react';

export default function Form() {
  const [content, setContent] = useState<string>('');

  const changeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return (
    <div
      style={{
        maxWidth: 400,
        width: '90%',
        margin: '60px auto',
        padding: 30,
        borderRadius: 20,
        background: 'linear-gradient(135deg, #d0e8ff, #f0f4ff)',
        boxShadow: '0 12px 25px rgba(0,0,0,0.3)',
        textAlign: 'center' as const,
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2
        style={{
          marginBottom: 25,
          fontSize: 24,
          color: '#111',
          fontWeight: 600,
        }}
      >
        Nhập nội dung
      </h2>

      <input
        type="text"
        value={content}
        onChange={changeContent}
        placeholder="Nhập văn bản..."
        style={{
          width: '100%',
          boxSizing: 'border-box',
          padding: '14px 16px',
          borderRadius: 12,
          border: '2px solid #3B82F6',
          fontSize: 16,
          marginBottom: 20,
          outline: 'none',
          transition: '0.2s',
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = '#2563eb')}
        onBlur={(e) => (e.currentTarget.style.borderColor = '#3B82F6')}
      />

      <div
        style={{
          minHeight: 50,
          padding: 15,
          borderRadius: 12,
          background: '#3B82F6',
          color: '#fff',
          fontWeight: 500,
          fontSize: 16,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          transition: 'all 0.2s ease',
          wordBreak: 'break-word',
        }}
      >
        {content || 'Nội dung sẽ hiển thị ở đây'}
      </div>
    </div>
  );
}
