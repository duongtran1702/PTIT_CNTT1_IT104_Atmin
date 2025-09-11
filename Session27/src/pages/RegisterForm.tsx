import { Button, Card, Form, Input, message, Typography } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

interface Account {
    email: string;
    password: string;
    confirmPassword?: string;
}

export default function RegisterForm() {
    const [forms] = useForm();
    const navigate = useNavigate();
    const [accs, setAccS] = useState<Account[]>(() => {
        const saved = localStorage.getItem('accounts');
        if (!saved) return [];
        const parsed = JSON.parse(saved);
        // Kiểm tra nếu không phải mảng, gói nó thành mảng
        return Array.isArray(parsed) ? parsed : [parsed];
    });

    useEffect(() => {
        console.log('Accounts updated:', accs);
    }, [accs]);

    const onRegister = (values: Account) => {
        const { email, password } = values; // chỉ lấy email và password
        const newAccount = { email, password };

        const isDuplicate = accs.find((acc) => acc.email === newAccount.email);
        if (isDuplicate) {
            message.error('This email is already registered!');
            return;
        }

        setAccS((pre) => {
            const updatedAccs = [...pre, newAccount];
            localStorage.setItem('accounts', JSON.stringify(updatedAccs));
            message.success('Register successful!');
            // Redirect sau khi đăng ký thành công
            return updatedAccs;
        });
        navigate('/bai8/login');
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '90vh',
            }}
        >
            <Card
                style={{
                    width: 400,
                    borderRadius: 10,
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                }}
            >
                <Title level={3} style={{ textAlign: 'center' }}>
                    Register account
                </Title>

                <Form layout="vertical" onFinish={onRegister} form={forms}>
                    <Form.Item
                        label="Your email"
                        name="email"
                        rules={[
                            {
                                type: 'email',
                                required: true,
                                message: 'Please enter your email!',
                            },
                        ]}
                    >
                        <Input placeholder="name@company.com" />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your password!',
                            },
                        ]}
                    >
                        <Input.Password placeholder="******" />
                    </Form.Item>

                    <Form.Item
                        label="Confirm Password"
                        name="confirmPassword"
                        dependencies={['password']}
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (
                                        !value ||
                                        getFieldValue('password') === value
                                    ) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(
                                        new Error('Passwords do not match!')
                                    );
                                },
                            }),
                        ]}
                    >
                        <Input.Password placeholder="******" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            Register an account
                        </Button>
                    </Form.Item>
                </Form>

                <div style={{ textAlign: 'center' }}>
                    <Text>
                        Already have an account?{' '}
                        <NavLink style={{ fontWeight: 500 }} to="/bai8/login">
                            Login here
                        </NavLink>
                    </Text>
                </div>
            </Card>
        </div>
    );
}
