import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';

interface IProducts {
    id: number;
    name: string;
    price: number;
    description: string;
}

const products: IProducts[] = [
    {
        id: 1,
        name: 'iPhone 15 Pro',
        price: 29990000,
        description: 'Điện thoại cao cấp với chip A17 Pro và camera tiên tiến.',
    },
    {
        id: 2,
        name: 'Samsung Galaxy S23 Ultra',
        price: 26990000,
        description: 'Smartphone flagship của Samsung với camera 200MP.',
    },
    {
        id: 3,
        name: 'MacBook Air M2',
        price: 28990000,
        description: 'Laptop mỏng nhẹ với chip Apple M2 hiệu năng mạnh mẽ.',
    },
    {
        id: 4,
        name: 'Dell XPS 13',
        price: 25990000,
        description: 'Laptop siêu mỏng với màn hình InfinityEdge sắc nét.',
    },
    {
        id: 5,
        name: 'iPad Pro 12.9',
        price: 31990000,
        description: 'Máy tính bảng cao cấp với màn hình Liquid Retina XDR.',
    },
];
export default function Products() {
    const [searchQuery] = useSearchParams();
    const name = searchQuery.get('search');
    const productTmp = products.filter((temp) => {
        if (name) return temp.name.toLowerCase().includes(name?.toLowerCase());
        else return products;
    });
    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    gap: 10,
                    flexWrap: 'wrap',
                    marginTop: 20,
                }}
            >
                {productTmp.map((p) => (
                    <ProductCard key={p.id} data={p} />
                ))}
            </div>
        </div>
    );
}
