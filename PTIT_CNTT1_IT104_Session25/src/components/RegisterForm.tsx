import { Button, Card, Form, Input, Typography } from 'antd';
import { NavLink } from 'react-router-dom';

const { Title, Text } = Typography;

export default function RegisterForm() {
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
                        <NavLink style={{ fontWeight: 500 }} to="/bai4/login">
                            Login here
                        </NavLink>
                    </Text>
                </div>
            </Card>
        </div>
    );
}
