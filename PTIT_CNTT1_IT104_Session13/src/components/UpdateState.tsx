import { Component } from 'react';

type Company = {
    name: string;
};

const companies: Company[] = [
    { name: 'Rikkei Academy' },
    { name: 'Google' },
    { name: 'Microsoft' },
    { name: 'Apple' },
    { name: 'Amazon' },
    { name: 'Meta' },
    { name: 'Netflix' },
    { name: 'Tesla' },
    { name: 'Samsung' },
    { name: 'Intel' },
    { name: 'Adobe' },
];

interface CompanyState {
    data: Company;
}

let tmp = 1;

export default class UpdateState extends Component<object, CompanyState> {
    state: CompanyState = { data: companies[0] };

    change = () => {
        this.setState({ data: companies[tmp++] });
        if (tmp > 10) tmp = 0;
    };

    render() {
        const containerStyle: React.CSSProperties = {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            width: "350px",
            marginTop: "20px",
            padding: "25px",
            border: "1px solid #ddd",
            borderRadius: "12px",
            background: "#fefefe",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            textAlign: "center",
            fontFamily: "Arial, sans-serif"
        };

        const titleStyle: React.CSSProperties = {
            fontSize: "20px",
            fontWeight: "bold",
            color: "#333",
        };

        const buttonStyle: React.CSSProperties = {
            padding: "10px 18px",
            fontSize: "16px",
            fontWeight: "bold",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "background-color 0.2s ease"
        };

        return (
            <div style={containerStyle}>
                <h2 style={titleStyle}>Tên công ty: {this.state.data.name}</h2>
                <button
                    style={buttonStyle}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
                    onClick={this.change}
                >
                    Change
                </button>
            </div>
        );
    }
}
