import { useState, type ChangeEvent, type FormEvent } from 'react';
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';

interface Form {
    fullname: string;
    email: string;
}

export default function RegisterInformation() {
    const [form, setForm] = useState<Form>({ fullname: '', email: '' });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (form.fullname && form.email) {
            console.log('Đăng ký thành công', form);
            setForm({ fullname: '', email: '' });
        }
    };

    const inputContainer: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
        position: 'relative',
    };

    const iconStyle: React.CSSProperties = {
        position: 'absolute',
        left: '10px',
        color: '#0d6efd', // xanh dương nam tính
        fontSize: '20px',
    };

    const inputStyle: React.CSSProperties = {
        padding: '8px 12px 8px 36px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        width: '100%',
        outline: 'none',
    };

    const errorStyle: React.CSSProperties = {
        color: '#ff4d4f', // đỏ lỗi nhưng không quá nữ tính
        fontSize: '12px',
        marginBottom: '10px',
    };

    const buttonStyle: React.CSSProperties = {
        padding: '8px 16px',
        borderRadius: '8px',
        border: 'none',
        backgroundColor: '#0d6efd', // xanh dương
        color: '#fff',
        cursor: 'pointer',
        fontWeight: 'bold',
        width: '100%',
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                width: '300px',
                margin: '50px auto',
                padding: '20px',
                borderRadius: '15px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                fontFamily: 'Arial, sans-serif',
                backgroundColor: '#e6f0ff', // xanh nhạt nam tính
            }}
        >
            <h2
                style={{
                    textAlign: 'center',
                    color: '#0d6efd', // xanh dương
                    marginBottom: '15px',
                }}
            >
                Đăng ký thông tin
            </h2>

            <div style={inputContainer}>
                <AiOutlineUser style={iconStyle} />
                <input
                    name="fullname"
                    type="text"
                    placeholder="Nhập họ tên ..."
                    value={form.fullname}
                    onChange={handleChange}
                    style={inputStyle}
                />
            </div>
            {!form.fullname && (
                <div style={errorStyle}>Trường này bắt buộc</div>
            )}

            <div style={inputContainer}>
                <AiOutlineMail style={iconStyle} />
                <input
                    name="email"
                    type="text"
                    placeholder="example@gmail.com"
                    value={form.email}
                    onChange={handleChange}
                    style={inputStyle}
                />
            </div>
            {!form.email && <div style={errorStyle}>Trường này bắt buộc</div>}

            <button type="submit" style={buttonStyle}>
                Submit
            </button>
        </form>
    );
}
