import React, { useReducer } from 'react';

// ------------------ State & Reducer ------------------
interface State {
    username: string;
    password: string;
    status: 'idle' | 'loading' | 'success' | 'error';
    message: string;
}

const initialState: State = {
    username: '',
    password: '',
    status: 'idle',
    message: '',
};

type Action =
    | { type: 'SET_FIELD'; field: 'username' | 'password'; value: string }
    | { type: 'LOGIN_START' }
    | { type: 'LOGIN_SUCCESS'; message: string }
    | { type: 'LOGIN_ERROR'; message: string };

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'SET_FIELD':
            return { ...state, [action.field]: action.value };
        case 'LOGIN_START':
            return { ...state, status: 'loading', message: '' };
        case 'LOGIN_SUCCESS':
            return { ...state, status: 'success', message: action.message };
        case 'LOGIN_ERROR':
            return { ...state, status: 'error', message: action.message };
        default:
            return state;
    }
}

// ------------------ Fake API ------------------
function fakeAuthAPI(username: string, password: string): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'admin' && password === '1234') {
                resolve('Đăng nhập thành công! 🎉');
            } else {
                reject('Sai tên đăng nhập hoặc mật khẩu 😢');
            }
        }, 2000);
    });
}

// ------------------ Component ------------------
export default function LoginForm() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        dispatch({ type: 'LOGIN_START' });

        try {
            const message = await fakeAuthAPI(state.username, state.password);
            dispatch({ type: 'LOGIN_SUCCESS', message });
        } catch (error) {
            dispatch({ type: 'LOGIN_ERROR', message: error as string });
        }
    };

    // ------------------ Styles ------------------
    const containerStyle: React.CSSProperties = {
        maxWidth: 350,
        margin: '80px auto',
        padding: 30,
        borderRadius: 20,
        boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
        background: '#ffe4e1',
        textAlign: 'center',
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
    };

    const inputStyle: React.CSSProperties = {
        width: '80%', // Chiếm 80% container
        maxWidth: 250, // Giới hạn max width
        padding: 12,
        margin: '10px auto', // tự động căn giữa
        display: 'block', // bắt buộc margin auto hoạt động
        borderRadius: 10,
        border: '2px solid #ffb6c1',
        outline: 'none',
        fontSize: 16,
        transition: '0.2s',
    };

    const buttonStyle: React.CSSProperties = {
        width: '80%',
        padding: 12,
        borderRadius: 10,
        border: 'none',
        background: '#ff69b4',
        color: 'white',
        fontSize: 16,
        cursor: state.status === 'loading' ? 'not-allowed' : 'pointer',
        transition: '0.3s',
    };

    const messageStyle: React.CSSProperties = {
        marginTop: 15,
        fontWeight: 'bold',
    };

    return (
        <div style={containerStyle}>
            <h2 style={{ marginBottom: 20 }}>💖 Cute Login 💖</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={state.username}
                    onChange={(e) =>
                        dispatch({
                            type: 'SET_FIELD',
                            field: 'username',
                            value: e.target.value,
                        })
                    }
                    required
                    style={inputStyle}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={state.password}
                    onChange={(e) =>
                        dispatch({
                            type: 'SET_FIELD',
                            field: 'password',
                            value: e.target.value,
                        })
                    }
                    required
                    style={inputStyle}
                />
                <button
                    type="submit"
                    disabled={state.status === 'loading'}
                    style={buttonStyle}
                >
                    {state.status === 'loading'
                        ? 'Đang đăng nhập...'
                        : 'Đăng nhập 💕'}
                </button>
            </form>

            {state.status === 'success' && (
                <p style={{ ...messageStyle, color: 'green' }}>
                    {state.message}
                </p>
            )}
            {state.status === 'error' && (
                <p style={{ ...messageStyle, color: 'red' }}>{state.message}</p>
            )}
        </div>
    );
}
