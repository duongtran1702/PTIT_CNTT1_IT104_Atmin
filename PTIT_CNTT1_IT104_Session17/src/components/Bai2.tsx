import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const story: Product = {
  id: 1,
  name: 'One Piece',
  price: 32000,
  quantity: 100,
};

export default function Bai2() {
  const [product] = useState<Product>(story);

  return (
    <div
      style={{
        width: 350,
        margin: '50px auto',
        padding: 25,
        borderRadius: 16,
        background: '#f0f4ff',
        boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          marginBottom: 20,
          color: '#111',
        }}
      >
        Thông tin sản phẩm
      </h2>

      <div style={{ marginBottom: 10, fontSize: 16 }}>
        <strong>Id:</strong> {product.id}
      </div>
      <div style={{ marginBottom: 10, fontSize: 16 }}>
        <strong>Name:</strong> {product.name}
      </div>
      <div style={{ marginBottom: 10, fontSize: 16 }}>
        <strong>Price:</strong> {product.price.toLocaleString()} VNĐ
      </div>
      <div style={{ marginBottom: 10, fontSize: 16 }}>
        <strong>Quantity:</strong> {product.quantity}
      </div>
    </div>
  );
}
