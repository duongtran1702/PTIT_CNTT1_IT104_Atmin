import { useState } from 'react';
import type { IAccount } from './LoginForm';
import { Button, Card, Typography, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

export const Account = () => {
    const nvg = useNavigate();
    const [data] = useState<IAccount | null>(() => {
        const dataLocal = localStorage.getItem('account');
        if (dataLocal) return JSON.parse(dataLocal);
        return null;
    });

    const handleLogOut = () => {
        nvg('/bai5/login');
        localStorage.removeItem('account');
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #e0f7fa 0%, #e1f5fe 100%)',
                padding: 20,
            }}
        >
            <Card
                hoverable
                style={{
                    width: 420,
                    borderRadius: 20,
                    boxShadow: '0 10px 25px rgba(0,0,0,0.12)',
                    textAlign: 'center',
                    padding: '28px 20px',
                    background: '#fff',
                    transition: 'all 0.3s ease',
                }}
            >
                {data ? (
                    <>
                        <Title
                            level={3}
                            style={{
                                marginBottom: 24,
                                color: '#1677ff',
                                fontWeight: 700,
                            }}
                        >
                            Welcome back 👋
                        </Title>

                        <Space
                            direction="vertical"
                            size="middle"
                            style={{
                                display: 'flex',
                                background: '#f9fbfd',
                                padding: 16,
                                borderRadius: 12,
                                marginBottom: 28,
                            }}
                        >
                            <Text>
                                <Text strong>Email:</Text> {data.email}
                            </Text>
                            <Text>
                                <Text strong>Authority:</Text> {data.authority}
                            </Text>
                        </Space>

                        <Button
                            type="primary"
                            danger
                            block
                            size="large"
                            style={{
                                height: 45,
                                borderRadius: 12,
                                fontWeight: 600,
                                fontSize: 16,
                            }}
                            onClick={handleLogOut}
                        >
                            Log Out
                        </Button>
                    </>
                ) : (
                    <Title
                        level={4}
                        style={{ color: 'gray', fontWeight: 500 }}
                    >
                        No account found. Please login.
                    </Title>
                )}
            </Card>
        </div>
    );
};
