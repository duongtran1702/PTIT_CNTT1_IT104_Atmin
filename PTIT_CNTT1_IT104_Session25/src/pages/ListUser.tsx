import { Button, Card, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export interface User {
    id: number;
    email: string;
    username: string;
    address: string;
}

export const ListUser = () => {
    const users: User[] = [
        {
            id: 1,
            email: 'alice@example.com',
            username: 'Alice',
            address: '123 Main St',
        },
        {
            id: 2,
            email: 'bob@example.com',
            username: 'Bobie',
            address: '456 Elm St',
        },
        {
            id: 3,
            email: 'carol@example.com',
            username: 'Skirk',
            address: '789 Oak St',
        },
        {
            id: 4,
            email: 'dave@example.com',
            username: 'Furina',
            address: '101 Pine St',
        },
        {
            id: 5,
            email: 'eve@example.com',
            username: 'Escoffier',
            address: '202 Maple St',
        },
    ];

    const gradients = [
        'linear-gradient(135deg, #FFDEE9 0%, #B5FFFC 100%)', // hồng – xanh pastel
        'linear-gradient(135deg, #FFE6A7 0%, #FFB3BA 100%)', // cam – hồng pastel
        'linear-gradient(135deg, #D5FFB3 0%, #A7E6FF 100%)', // xanh lá – xanh dương pastel
        'linear-gradient(135deg, #FDD0FF 0%, #C0FFF4 100%)', // tím nhạt – xanh pastel
        'linear-gradient(135deg, #FFD8A9 0%, #FFABAB 100%)', // cam nhạt – đỏ nhạt
    ];
    const nvg = useNavigate();

    const detailUser = (id: number) => {
        nvg(`/list-user/${id}`);
        localStorage.setItem('users', JSON.stringify(users));
    };

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '20px',
                padding: '20px',
            }}
        >
            {users.map((u, idx) => (
                <Card
                    key={u.id}
                    hoverable
                    style={{
                        height: '260px',
                        borderRadius: '12px',
                        boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: '20px',
                        background: gradients[idx % gradients.length],
                        textAlign: 'left',
                        transition: 'transform 0.3s, box-shadow 0.3s',
                    }}
                    onMouseEnter={(e) => {
                        const card = e.currentTarget;
                        card.style.transform = 'translateY(-5px)';
                        card.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
                    }}
                    onMouseLeave={(e) => {
                        const card = e.currentTarget;
                        card.style.transform = 'translateY(0)';
                        card.style.boxShadow = '0 6px 20px rgba(0,0,0,0.08)';
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            marginBottom: '10px',
                        }}
                    >
                        <Avatar
                            size={50}
                            icon={<UserOutlined />}
                            style={{ backgroundColor: '#fff3f3' }}
                        />
                        <div>
                            <div
                                style={{ fontWeight: 600, fontSize: '1.1rem' }}
                            >
                                {u.username}
                            </div>
                            <div style={{ fontSize: '0.9rem', color: '#555' }}>
                                ID: {u.id}
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            fontSize: '0.9rem',
                            color: '#333',
                            marginBottom: '10px',
                        }}
                    >
                        <div>
                            <strong>Email:</strong> {u.email}
                        </div>
                        <div>
                            <strong>Address:</strong> {u.address}
                        </div>
                    </div>
                    <Button
                        type="primary"
                        block
                        style={{ borderRadius: '6px' }}
                        onClick={() => detailUser(u.id)}
                    >
                        Xem chi tiết
                    </Button>
                </Card>
            ))}
        </div>
    );
};
