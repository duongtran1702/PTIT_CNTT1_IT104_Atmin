import { useParams, useNavigate } from 'react-router-dom';
import { Button, Card, Avatar, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import type { User } from './ListUser';
import { useState } from 'react';

const { Title, Text } = Typography;

export const UserDetail = () => {
    const [listUsers] = useState<User[]>(() => {
        const dataLocal = localStorage.getItem('users');
        if (!dataLocal) return [];
        return JSON.parse(dataLocal);
    });

    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const user = listUsers.find((u) => u.id === Number(id));

    if (!user)
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    fontSize: '1.5rem',
                }}
            >
                User not found
            </div>
        );

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '40px',
                flexDirection: 'column',
            }}
        >
            <h1>Thông tin chi tiết</h1>
            <Card
                style={{
                    width: '360px',
                    borderRadius: '12px',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                    background:
                        'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
                    color: 'black',
                    textAlign: 'center',
                    padding: '30px',
                }}
            >
                <Avatar
                    size={80}
                    icon={<UserOutlined />}
                    style={{ marginBottom: '20px' }}
                />
                <Title level={3}>{user.username}</Title>
                <div
                    style={{
                        textAlign: 'left',
                        marginTop: '20px',
                        lineHeight: '1.6',
                    }}
                >
                    <Text strong>ID:</Text> <Text>{user.id}</Text>
                    <br />
                    <Text strong>Email:</Text> <Text>{user.email}</Text>
                    <br />
                    <Text strong>Address:</Text> <Text>{user.address}</Text>
                </div>
                <Button
                    type="primary"
                    style={{
                        marginTop: '25px',
                        borderRadius: '6px',
                        background: 'linear-gradient(90deg, #56ab2f, #a8e063)',
                        border: 'none',
                    }}
                    onClick={() => navigate(-1)}
                    block
                >
                    Quay lại
                </Button>
            </Card>
        </div>
    );
};
