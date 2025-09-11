import { Button, Card, Form, Input, Typography, message } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const { Title, Text } = Typography;

interface Account {
    email: string;
    password: string;
}

export const LoginForm = () => {
    const [accounts] = useState<Account[]>(() => {
        const saved = localStorage.getItem('accounts');
        if (!saved) return [];
        const parsed = JSON.parse(saved);
        // đảm bảo luôn là mảng
        return Array.isArray(parsed) ? parsed : [parsed];
    });

    const onFinish = (values: Account) => {
        const found = accounts.find(
            (acc) =>
                acc.email === values.email && acc.password === values.password
        );
        if (found) {
            message.success('Login successful!');
            // redirect ví dụ về trang home
        } else {
            message.error('Invalid email or password!');
        }
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
                    Login account
                </Title>

                <Form layout="vertical" onFinish={onFinish}>
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

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            Login an account
                        </Button>
                    </Form.Item>
                </Form>

                <div style={{ textAlign: 'center' }}>
                    <Text>
                        Don't have an account?{' '}
                        <NavLink
                            style={{ fontWeight: 500 }}
                            to="/bai8/register"
                        >
                            Register here
                        </NavLink>
                    </Text>
                </div>
            </Card>
        </div>
    );
};
