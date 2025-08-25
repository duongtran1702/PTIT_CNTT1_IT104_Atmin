import { Component } from 'react';
import './Item.css';
import type { Product } from '../data/product.data';
import { FaShoppingCart } from 'react-icons/fa';

export interface PropType {
    data: Product;
    addToCart: (p: Product) => void;
}

export default class Item extends Component<PropType> {
    render() {
        const { data, addToCart } = this.props;
        return (
            <div className="item">
                <img src={data.image} alt="" className="image-product" />
                <h4>{data.name}</h4>
                <div className="price">
                    {data.price.toLocaleString('vi-vn')}{' '}
                    <span style={{ textDecoration: 'underline' }}>đ</span>
                </div>
                <button
                    className="cart-button"
                    onClick={() => addToCart(data)}
                >
                    <FaShoppingCart size={20} /> Thêm vào giỏ hàng
                </button>
            </div>
        );
    }
}
