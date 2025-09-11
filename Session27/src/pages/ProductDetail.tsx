import { Button } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';
import type { Product } from './ListProduct';

const products: Product[] = [
    {
        id: 1,
        name: 'Laptop Dell XPS 13',
        price: 35000000,
        description:
            'Laptop siêu mỏng nhẹ, hiệu năng mạnh mẽ cho công việc và học tập.',
    },
    {
        id: 2,
        name: 'iPhone 14 Pro',
        price: 30000000,
        description:
            'Smartphone cao cấp với camera 48MP và màn hình ProMotion.',
    },
    {
        id: 3,
        name: 'Samsung Galaxy S22',
        price: 25000000,
        description: 'Điện thoại Android flagship với màn hình AMOLED sắc nét.',
    },
    {
        id: 4,
        name: 'Tai nghe Sony WH-1000XM4',
        price: 7000000,
        description:
            'Tai nghe chống ồn hàng đầu, pin bền và chất lượng âm thanh tuyệt hảo.',
    },
    {
        id: 5,
        name: 'Apple Watch Series 8',
        price: 12000000,
        description:
            'Đồng hồ thông minh với cảm biến sức khỏe và hỗ trợ tập luyện.',
    },
];

export const ProductDetail = () => {
    const navigate = useNavigate();
    const { idProduct } = useParams<{ idProduct: string }>();
    const product = products.find((p) => p.id === Number(idProduct));

    if (!product) {
        return (
            <h2 style={{ padding: '20px', color: 'red', textAlign: 'center' }}>
                ❌ Không tìm thấy sản phẩm
            </h2>
        );
    }

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#fff', // nền trắng
                padding: '40px',
            }}
        >
            <div
                style={{
                    maxWidth: '600px',
                    width: '100%',
                    padding: '30px',
                    borderRadius: '16px',
                    background:
                        'linear-gradient(135deg, #ff9a9e, #ff6a88, #ff99ac, #fad0c4, #fbc2eb, #a18cd1)',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
                    color: '#fff',
                    lineHeight: 1.6,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                    e.currentTarget.style.boxShadow =
                        '0 10px 30px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow =
                        '0 6px 20px rgba(0,0,0,0.25)';
                }}
            >
                <h2
                    style={{
                        marginBottom: '15px',
                        fontSize: '26px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}
                >
                    {product.name}
                </h2>
                <p style={{ fontSize: '16px', marginBottom: '12px' }}>
                    <strong>Mô tả:</strong> {product.description}
                </p>
                <p
                    style={{
                        fontSize: '18px',
                        marginBottom: '20px',
                        fontWeight: 'bold',
                    }}
                >
                    <strong>Giá:</strong>{' '}
                    <span style={{ color: '#ffff99' }}>
                        {product.price.toLocaleString()} VND
                    </span>
                </p>
                <div style={{ textAlign: 'center' }}>
                    <Button
                        type="primary"
                        size="large"
                        onClick={() => navigate(-1)}
                        style={{
                            backgroundColor: '#fff',
                            color: '#d81b60',
                            fontWeight: 'bold',
                            borderRadius: '8px',
                            border: 'none',
                        }}
                    >
                        ⬅ Quay lại danh sách
                    </Button>
                </div>
            </div>
        </div>
    );
};
