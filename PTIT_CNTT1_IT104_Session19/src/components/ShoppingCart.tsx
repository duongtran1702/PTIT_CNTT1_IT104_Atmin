import { useMemo, useState } from 'react';

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

const initialCart: CartItem[] = [
    { id: 1, name: 'Laptop Gaming Rồng Đỏ', price: 25_000_000, quantity: 1 },
    {
        id: 2,
        name: 'Tai Nghe Không Dây Siêu Bass',
        price: 2_500_000,
        quantity: 2,
    },
    { id: 3, name: 'Bàn Phím Cơ RGB Siêu Phẩm', price: 3_200_000, quantity: 1 },
    { id: 4, name: 'Chuột Gaming Sấm Sét', price: 1_200_000, quantity: 3 },
    { id: 5, name: 'Ghế Ergonomic Thần Thánh', price: 5_500_000, quantity: 1 },
];

export default function ShoppingCart() {
    const [cart, setCart] = useState<CartItem[]>(initialCart);

    const totalPrice = useMemo(
        () => cart.reduce((sum, e) => sum + e.price * e.quantity, 0),
        [cart]
    );

    const changeQuantity = (id: number, delta: number) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };

    return (
        <div
            style={{
                maxWidth: '500px',
                margin: '50px auto',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                fontFamily: 'Arial, sans-serif',
            }}
        >
            {/* Header gradient */}
            <div
                style={{
                    background: 'linear-gradient(90deg, #0d6efd, #0dcaf0)',
                    padding: '20px',
                    color: 'white',
                    textAlign: 'center',
                    fontSize: '20px',
                    fontWeight: 'bold',
                }}
            >
                Shopping Cart
            </div>

            {/* Items */}
            <div style={{ background: '#f8f9fa', padding: '15px' }}>
                {cart.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            background: 'white',
                            padding: '15px',
                            marginBottom: '10px',
                            borderRadius: '10px',
                            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                        }}
                    >
                        <div>
                            <div
                                style={{ fontWeight: 'bold', fontSize: '16px' }}
                            >
                                {item.name}
                            </div>
                            <div style={{ color: '#555', marginTop: '5px' }}>
                                {item.price.toLocaleString()} VND
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <button
                                onClick={() => changeQuantity(item.id, -1)}
                                style={{
                                    width: '30px',
                                    height: '30px',
                                    borderRadius: '50%',
                                    border: 'none',
                                    backgroundColor: '#0d6efd',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                }}
                            >
                                -
                            </button>
                            <span
                                style={{ margin: '0 10px', fontWeight: 'bold' }}
                            >
                                {item.quantity}
                            </span>
                            <button
                                onClick={() => changeQuantity(item.id, 1)}
                                style={{
                                    width: '30px',
                                    height: '30px',
                                    borderRadius: '50%',
                                    border: 'none',
                                    backgroundColor: '#0d6efd',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                }}
                            >
                                +
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Tổng tiền */}
            <div
                style={{
                    background: '#0dcaf0',
                    padding: '15px',
                    textAlign: 'right',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    color: '#fff',
                }}
            >
                Tổng tiền: {totalPrice.toLocaleString()} VND
            </div>
        </div>
    );
}
