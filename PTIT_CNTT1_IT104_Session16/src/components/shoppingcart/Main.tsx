import { Component } from 'react';
import Item from './product/Item';
import { FaShoppingCart } from 'react-icons/fa';
import './Main.css';
import type { Product } from '../shoppingcart/data/product.data';
import { products } from '../shoppingcart/data/product.data';
import Cart from './cart/Cart';

type StateType = {
    data: Product[];
    cart: Product[];
    isShowCart: boolean;
};

export default class Main extends Component<object, StateType> {
    state: StateType = { data: products, cart: [], isShowCart: false };

    componentDidMount() {
        const saved = localStorage.getItem("cart");
        if (saved) {
            this.setState({ cart: JSON.parse(saved) });
        }
    }

    saveCart = (cart: Product[]) => {
        localStorage.setItem("cart", JSON.stringify(cart));
    };

    toggleCart = () => {
        this.setState({ isShowCart: !this.state.isShowCart });
    };

    addToCart = (product: Product) => {
        this.setState((prevState) => {
            const cart = [...prevState.cart];
            const index = cart.findIndex((p) => p.id === product.id);

            if (index !== -1) {
                cart[index] = { ...cart[index], quantity: cart[index].quantity + 1 };
            } else {
                cart.push({ ...product, quantity: 1 });
            }

            this.saveCart(cart);
            return { cart };
        });
    };

    handleIncrease = (id: number) => {
        this.setState((prev) => {
            const cart = prev.cart.map(p =>
                p.id === id ? { ...p, quantity: p.quantity + 1 } : p
            );
            this.saveCart(cart);
            return { cart };
        });
    };

    handleDecrease = (id: number) => {
        this.setState((prev) => {
            const cart = prev.cart.map(p =>
                p.id === id && p.quantity > 1
                    ? { ...p, quantity: p.quantity - 1 }
                    : p
            );
            this.saveCart(cart);
            return { cart };
        });
    };

    handleDelete = (id: number) => {
        this.setState((prev) => {
            const cart = prev.cart.filter(p => p.id !== id);
            this.saveCart(cart);
            return { cart };
        });
    };

    render() {
        return (
            <div className="container-add">
                <header>
                    <div className="left">
                        <div>Trang chủ</div>
                        <div>Danh sách sản phẩm</div>
                    </div>
                    <div className="right">
                        <FaShoppingCart
                            size={20}
                            color="white"
                            className="icon"
                            onClick={this.toggleCart}
                        />
                        {this.state.isShowCart && (
                            <Cart
                                cart={this.state.cart}
                                onIncrease={this.handleIncrease}
                                onDecrease={this.handleDecrease}
                                onDelete={this.handleDelete}
                            />
                        )}
                    </div>
                </header>

                <div className="container">
                    {this.state.data.map((p) => (
                        <Item key={p.id} data={p} addToCart={this.addToCart} />
                    ))}
                </div>
            </div>
        );
    }
}
