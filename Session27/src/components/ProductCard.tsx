import { Link } from 'react-router-dom';
import type { Product } from '../pages/ListProduct';
type ProductProps = {
    data: Product;
};

export const ProductCard = ({ data }: ProductProps) => {
    return (
        <div
            style={{
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                padding: '10px',
                width: '220px',
                backgroundColor: '#fff',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                textAlign: 'center',
                height: 130,
            }}
        >
            <h3
                style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    marginBottom: '10px',
                }}
            >
                {data.name}
            </h3>
            <p style={{ marginBottom: '15px', color: '#333' }}>
                Giá: {data.price.toLocaleString()} VND
            </p>
            <Link
                to={`/bai2/productDetail/${data.id}`}
                style={{ color: '#1677ff', textDecoration: 'none' }}
            >
                Xem chi tiết
            </Link>
        </div>
    );
};
