import { Component, type ChangeEvent, type FormEvent } from 'react';
import { FaUser, FaEnvelope, FaBirthdayCake, FaReact } from 'react-icons/fa';

type State = {
    name: string;
    email: string;
    age: string;
    error: string;
    submitted: boolean;
};

export default class UserForm extends Component<object, State> {
    state: State = {
        name: '',
        email: '',
        age: '',
        error: '',
        submitted: false,
    };

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                this.setState({ name: value });
                break;
            case 'email':
                this.setState({ email: value });
                break;
            case 'age':
                this.setState({ age: value });
                break;
        }
    };

    handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const { email, age } = this.state;
        this.setState({ error: '', submitted: false });

        if (!email.includes('@'))
            return this.setState({ error: 'Email không hợp lệ' });
        if (Number(age) < 0)
            return this.setState({ error: 'Tuổi không được âm' });

        this.setState({ submitted: true });
    };

    render() {
        const { name, email, age, error, submitted } = this.state;

        const inputStyle = {
            width: '100%',
            padding: 12,
            borderRadius: 10,
            border: '1px solid #ccc',
            marginTop: 5,
            fontSize: 16,
            outline: 'none',
            transition: '0.2s',
        } as const;

        const buttonStyle = {
            width: '100%',
            padding: 14,
            borderRadius: 12,
            border: 'none',
            background: 'linear-gradient(90deg, #3B82F6, #60A5FA)',
            color: '#fff',
            fontWeight: 600,
            marginTop: 15,
            cursor: 'pointer',
            fontSize: 16,
            transition: '0.2s',
        } as const;

        const containerStyle = {
            width: 380,
            margin: '50px auto',
            padding: 30,
            borderRadius: 20,
            background: 'linear-gradient(135deg, #f0f4ff, #e0f7fa)',
            boxShadow: '0 12px 25px rgba(0,0,0,0.25)',
            fontFamily: 'Arial, sans-serif',
        } as const;

        const labelStyle = { display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500, marginTop: 15 } as const;

        return (
            <div style={containerStyle}>
                <h2
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 12,
                        marginBottom: 25,
                        color: '#111',
                        fontSize: 24,
                    }}
                >
                    <FaReact color="#61DBFB" size={36} /> Nhập thông tin người dùng
                </h2>

                <form onSubmit={this.handleSubmit}>
                    <label style={labelStyle}>
                        <FaUser /> Tên:
                    </label>
                    <input name="name" value={name} onChange={this.handleChange} style={inputStyle} required />

                    <label style={labelStyle}>
                        <FaEnvelope /> Email:
                    </label>
                    <input name="email" type="email" value={email} onChange={this.handleChange} style={inputStyle} required />

                    <label style={labelStyle}>
                        <FaBirthdayCake /> Tuổi:
                    </label>
                    <input name="age" type="number" value={age} onChange={this.handleChange} style={inputStyle} required />

                    {error && <p style={{ color: 'red', marginTop: 10, fontWeight: 500 }}>{error}</p>}

                    <button
                        type="submit"
                        style={buttonStyle}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                        Gửi
                    </button>
                </form>

                {submitted && (
                    <div
                        style={{
                            marginTop: 25,
                            padding: 18,
                            borderRadius: 14,
                            background: '#d1f0f0',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        }}
                    >
                        <p><strong>Tên:</strong> {name}</p>
                        <p><strong>Email:</strong> {email}</p>
                        <p><strong>Tuổi:</strong> {age}</p>
                    </div>
                )}
            </div>
        );
    }
}
