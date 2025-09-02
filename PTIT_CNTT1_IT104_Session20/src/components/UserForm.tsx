import React, { useReducer } from 'react';

interface UserForm {
    name: string;
    email: string;
}

type Action = { type: 'changeForm'; field: keyof UserForm; value: string };

const reducer = (state: UserForm, action: Action): UserForm => {
    switch (action.type) {
        case 'changeForm':
            return { ...state, [action.field]: action.value };
        default:
            return state;
    }
};

export default function UserFormComponent() {
    const [form, dispatch] = useReducer(reducer, { name: '', email: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'changeForm',
            field: e.target.name as keyof UserForm,
            value: e.target.value,
        });
    };

    // Styles
    const container: React.CSSProperties = {
        width: '350px',
        margin: '30px auto',
        padding: '25px',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, #89f7fe, #66a6ff)', // đổi màu rõ hơn
        boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
        fontFamily: 'Segoe UI, sans-serif',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
    };

    const input: React.CSSProperties = {
        padding: '12px 14px',
        width: '100%',
        borderRadius: '10px',
        border: '1px solid #ccc',
        fontSize: '15px',
        transition: 'all 0.3s ease',
    };

    const inputFocus: React.CSSProperties = {
        ...input,
        border: '1px solid #007bff',
        boxShadow: '0 0 6px rgba(0, 123, 255, 0.4)',
        borderRadius: '10px',
    };

    const card: React.CSSProperties = {
        marginTop: '15px',
        padding: '12px',
        borderRadius: '12px',
        background: '#fff',
        boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
        width: '100%',
        textAlign: 'left',
    };

    return (
        <div style={container}>
            <h2 style={{ color: '#333', marginBottom: '10px' }}>
                Information User
            </h2>

            <input
                type="text"
                placeholder="Enter name..."
                name="name"
                style={input}
                value={form.name}
                onChange={handleChange}
                onFocus={(e) =>
                    (e.currentTarget.style.cssText = Object.entries(inputFocus)
                        .map(([k, v]) => `${k}:${v}`)
                        .join(';'))
                }
                onBlur={(e) =>
                    (e.currentTarget.style.cssText = Object.entries(input)
                        .map(([k, v]) => `${k}:${v}`)
                        .join(';'))
                }
            />
            <input
                type="email"
                placeholder="Enter email..."
                name="email"
                style={input}
                value={form.email}
                onChange={handleChange}
                onFocus={(e) =>
                    (e.currentTarget.style.cssText = Object.entries(inputFocus)
                        .map(([k, v]) => `${k}:${v}`)
                        .join(';'))
                }
                onBlur={(e) =>
                    (e.currentTarget.style.cssText = Object.entries(input)
                        .map(([k, v]) => `${k}:${v}`)
                        .join(';'))
                }
            />

            <div style={card}>
                <p>
                    <strong>Name:</strong> {form.name || '(chưa nhập)'}
                </p>
                <p>
                    <strong>Email:</strong> {form.email || '(chưa nhập)'}
                </p>
            </div>
        </div>
    );
}
