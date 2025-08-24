import { Component } from 'react';

interface Enter {
    input: string;
}

export default class Input extends Component<object, Enter> {
    state: Enter = { input: '' };

    enterValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ input: e.target.value });
    };

    render() {
        const containerStyle: React.CSSProperties = {
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            width: '300px',
            marginTop: '20px',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '12px',
            background: '#fafafa',
            boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
        };

        const labelStyle: React.CSSProperties = {
            fontSize: '18px',
            color: '#333',
            margin: 0,
        };

        const inputStyle: React.CSSProperties = {
            padding: '10px 14px',
            fontSize: '16px',
            border: '1px solid #bbb',
            borderRadius: '8px',
            outline: 'none',
            transition: 'all 0.2s ease-in-out',
        };

        return (
            <div style={containerStyle}>
                <h3 style={labelStyle}>Dữ liệu: {this.state.input} </h3>
                <input
                    type="text"
                    onChange={this.enterValue}
                    placeholder="Enter something"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = '#007bff')}
                    onBlur={(e) => (e.target.style.borderColor = '#bbb')}
                />
            </div>
        );
    }
}
