import { ProductCard } from '../components/ProductCard';

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}
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

export default function ListProduct() {
    return (
        <div
            style={{
                display: 'flex',
                gap: 10,
                flexWrap: 'wrap',
                marginTop: 20,
            }}
        >
            {products.map((p) => (
                <ProductCard key={p.id} data={p} />
            ))}
        </div>
    );
}
