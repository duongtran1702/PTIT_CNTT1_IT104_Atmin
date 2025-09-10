import { Button, Card, Form, Input, message, Select, Typography } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

export interface IAccount {
    isLogin: boolean;
    email: string;
    password: string;
    authority: string;
}

interface InforAccount {
    email: string;
    password: string;
    authority: string;
}

const accounts: InforAccount[] = [
    { email: 'admin@gmail.com', password: 'admin123', authority: 'admin' },
    { email: 'atmin@gmail.com', password: 'atmin123', authority: 'user' },
];

export const LoginForm = () => {
    const [formLogin] = useForm();
    const nvg = useNavigate();

    const handleLogin = (values: Omit<IAccount, 'isLogin'>) => {
        if (!values) return;

        const tmp = accounts.find((acc) => acc.email === values.email);
        if (
            tmp &&
            tmp.authority === values.authority &&
            tmp.password === values.password
        ) {
            const newAccount: IAccount = {
                ...values,
                isLogin: true,
            };

            localStorage.setItem('account', JSON.stringify(newAccount));
            message.success('Login successful 🎉');
            nvg('/bai5/account');
            formLogin.resetFields();
        } else {
            message.error('Login failed ❌');
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #e0f7fa 0%, #f1f8ff 100%)',
                padding: 20,
            }}
        >
            <Card
                hoverable
                style={{
                    width: 420,
                    borderRadius: 18,
                    boxShadow: '0 12px 28px rgba(0,0,0,0.15)',
                    padding: '28px 22px',
                }}
            >
                <Title
                    level={3}
                    style={{
                        textAlign: 'center',
                        marginBottom: 28,
                        color: '#1677ff',
                        fontWeight: 700,
                    }}
                >
                    Login Account 🔑
                </Title>

                <Form layout="vertical" form={formLogin} onFinish={handleLogin}>
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
                        <Input
                            placeholder="name@company.com"
                            size="large"
                            style={{ borderRadius: 10 }}
                        />
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
                        <Input.Password
                            placeholder="******"
                            size="large"
                            style={{ borderRadius: 10 }}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Authority"
                        name="authority"
                        rules={[
                            {
                                required: true,
                                message: 'Please select your authority!',
                            },
                        ]}
                    >
                        <Select
                            size="large"
                            style={{ borderRadius: 10 }}
                            placeholder="-- Choose authority --"
                            options={[
                                { value: 'admin', label: 'Admin' },
                                { value: 'user', label: 'User' },
                            ]}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            block
                            size="large"
                            style={{
                                borderRadius: 12,
                                fontWeight: 600,
                                height: 48,
                            }}
                        >
                            Login
                        </Button>
                    </Form.Item>
                </Form>

                <div style={{ textAlign: 'center' }}>
                    <Text>
                        Don’t have an account?{' '}
                        <span
                            style={{
                                fontWeight: 600,
                                color: '#1677ff',
                                cursor: 'pointer',
                                textDecoration: 'underline',
                            }}
                        >
                            Register here
                        </span>
                    </Text>
                </div>
            </Card>
        </div>
    );
};
