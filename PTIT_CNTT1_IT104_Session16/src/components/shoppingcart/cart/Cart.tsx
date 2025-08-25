import { Component } from 'react';
import type { Product } from '../data/product.data';
import ItemCart from './ItemCart';
import './Cart.css';

interface PropCartType {
    cart: Product[];
    onIncrease: (id: number) => void;
    onDecrease: (id: number) => void;
    onDelete: (id: number) => void;
}

export default class Cart extends Component<PropCartType> {
    render() {
        const { cart, onIncrease, onDecrease, onDelete } = this.props;

        const total = cart.reduce(
            (sum, p) => sum + p.price * p.quantity,
            0
        );

        return (
            <div className="container-cart">
                <div className="cart-top">Cart</div>
                <div className="cart-main">
                    {cart.map((p) => (
                        <ItemCart
                            key={p.id}
                            data={p}
                            onIncrease={onIncrease}
                            onDecrease={onDecrease}
                            onDelete={onDelete}
                        />
                    ))}
                </div>
                <div className="cart-bot">
                    Tổng tiền: {total.toLocaleString('vi-VN')}{' '}
                    <span style={{ textDecoration: 'underline' }}>đ</span>
                </div>
            </div>
        );
    }
}
