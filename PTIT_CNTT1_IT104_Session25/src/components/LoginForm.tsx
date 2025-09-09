import { Button, Card, Form, Input, Typography } from 'antd';
import { NavLink } from 'react-router-dom';
const { Title, Text } = Typography;

export const LoginForm = () => {
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

                <Form layout="vertical">
                    <Form.Item
                        label="Your email"
                        name="email"
                        rules={[
                            {
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
                        Don’t have an account?{' '}
                        <NavLink style={{ fontWeight: 500 }}  to="/bai3/register">
                            Register here
                        </NavLink>
                    </Text>
                </div>
            </Card>
        </div>
    );
};
