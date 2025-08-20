import { Component } from 'react';

interface App {
    theme: boolean;
}

const baseStyle: React.CSSProperties = {
    border: '1px solid gray',
    marginTop: '20px',
    padding: '20px',
    fontSize: '20px',
    fontWeight: '600',
    width: '300px',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
};

const btnCss: React.CSSProperties = {
    padding: '8px 12px',
    cursor: 'pointer',
    marginTop: '15px',
    borderRadius: '6px',
    border: 'none',
    fontSize: '16px',
    fontWeight: '500',
    background: '#007bff',
    color: 'white',
    transition: '0.3s',
};

export default class DemoApp extends Component<object, App> {
    state: App = { theme: true };

    changeTheme = () => {
        this.setState((prev) => ({ theme: !prev.theme }));
    };

    render() {
        // style động
        const themeStyle = this.state.theme
            ? { ...baseStyle, background: 'white', color: 'black' }
            : { ...baseStyle, background: 'black', color: 'white' };

        return (
            <div>
                <div style={themeStyle}>
                    <div>Nền: {this.state.theme ? 'Sáng' : 'Tối'}</div>
                    <div>Ngôn ngữ: {this.state.theme ? 'Vietnamese' : 'English'}</div>
                </div>
                <button
                    style={{
                        ...btnCss,
                        background: this.state.theme ? '#007bff' : '#28a745',
                    }}
                    onClick={this.changeTheme}
                >
                    Change theme
                </button>
            </div>
        );
    }
}
