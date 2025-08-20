import { Component } from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

interface ChildrenProps {
    data: Product;
}

const itemStyle: React.CSSProperties = { padding: '6px 0px', margin: '0px' };

export default class Children extends Component<ChildrenProps> {
    constructor(props: ChildrenProps) {
        super(props);
    }

    render() {
        const { id, name, price, quantity } = this.props.data;

        return (
            <div
                style={{
                    border: '2px solid #17a2b8',
                    borderRadius: '10px',
                    padding: '15px',
                    margin: '15px 0',
                    width: '350px',
                    backgroundColor: '#f8f9fa',
                    boxShadow: '0 3px 8px rgba(0,0,0,0.15)',
                    fontFamily: 'Arial, sans-serif',
                }}
            >
                <h3
                    style={{
                        ...itemStyle,
                        color: '#17a2b8',
                        marginBottom: '12px',
                        textAlign: 'center',
                    }}
                >
                    🛒 Product Information
                </h3>

                <div style={itemStyle}>
                    <strong>ID:</strong> <span>{id}</span>
                </div>
                <div style={itemStyle}>
                    <strong>Name:</strong>{' '}
                    <span style={{ color: '#007bff' }}>{name}</span>
                </div>
                <div style={itemStyle}>
                    <strong>Price:</strong>{' '}
                    <span style={{ color: '#28a745' }}>${price}</span>
                </div>
                <div style={itemStyle}>
                    <strong>Quantity:</strong>{' '}
                    <span style={{ color: quantity > 0 ? '#28a745' : '#dc3545' }}>
                        {quantity}
                    </span>
                </div>
            </div>
        );
    }
}
