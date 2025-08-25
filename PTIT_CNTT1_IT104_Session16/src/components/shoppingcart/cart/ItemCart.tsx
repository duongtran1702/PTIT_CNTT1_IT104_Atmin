import { Component } from "react";
import type { Product } from "../data/product.data";
import { MdDelete } from "react-icons/md";
import "./ItemCart.css";

interface ItemCartProps {
    data: Product;
    onIncrease: (id: number) => void;
    onDecrease: (id: number) => void;
    onDelete: (id: number) => void;
}

export default class ItemCart extends Component<ItemCartProps> {
    render() {
        const { data, onIncrease, onDecrease, onDelete } = this.props;

        return (
            <div className="cart-item">
                <div className="avata">
                    <img src={data.image} alt={data.name} />
                </div>
                <div className="title">{data.name}</div>
                <button className="increase btn" onClick={() => onIncrease(data.id)}>+</button>
                <div className="quantity btn">{data.quantity}</div>
                <button className="decrease btn" onClick={() => onDecrease(data.id)}>-</button>
                <MdDelete 
                    size={20} 
                    className="icon-delete" 
                    onClick={() => onDelete(data.id)} 
                />
            </div>
        );
    }
}
