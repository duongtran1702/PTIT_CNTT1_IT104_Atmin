import { Component } from 'react';
import Children from './Children';

interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}
const book: Product = {
    id: 1,
    name: 'Clean Code',
    price: 250000,
    quantity: 10,
};

export default class Parent extends Component<object, Product> {
    state: Product = book;
    render() {
        return (
            <div>
                <br />
                <Children data={this.state} />
            </div>
        );
    }
}
