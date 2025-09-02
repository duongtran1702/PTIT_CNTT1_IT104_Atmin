import React, { useState } from 'react';

interface InforForm {
    name: string;
    email: string;
    isShow: boolean;
}

export default function UserProfile() {
    const [inforForm, setInforForm] = useState<InforForm>({
        name: '',
        email: '',
        isShow: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInforForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inforForm.name.trim() && inforForm.email.trim()) {
            setInforForm((prev) => ({ ...prev, isShow: true }));
        }
    };

    const styles: React.CSSProperties = {
        width: '300px',
        marginLeft:20,
        padding: '20px',
        borderRadius: '12px',
        background: '#f9f9f9',
        boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
    };

    const inputStyle: React.CSSProperties = {
        padding: '10px',
        width: '80%',
        borderRadius: '8px',
        border: '1px solid #ccc',
        fontSize: '14px',
    };

    const buttonStyle: React.CSSProperties = {
        padding: '10px',
        width: '50%',
        borderRadius: '8px',
        border: 'none',
        background: '#4CAF50',
        color: '#fff',
        fontWeight: 'bold',
        cursor: 'pointer',
    };

    return (
        <form onSubmit={handleSubmit} style={styles}>
            <h3>Information User</h3>
            <input
                type="text"
                placeholder="Enter name..."
                name="name"
                value={inforForm.name}
                onChange={handleChange}
                style={inputStyle}
            />
            <input
                type="email"
                placeholder="Enter email..."
                name="email"
                value={inforForm.email}
                onChange={handleChange}
                style={inputStyle}
            />
            <button type="submit" style={buttonStyle}>Submit</button>

            {inforForm.isShow && (
                <div>
                    <p><strong>Name:</strong> {inforForm.name}</p>
                    <p><strong>Email:</strong> {inforForm.email}</p>
                </div>
            )}
        </form>
    );
}
