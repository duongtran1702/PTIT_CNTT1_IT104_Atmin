import { Component } from "react";

interface StateType {
    count: number;
}

export default class ClickCounter extends Component<object, StateType> {
    constructor(props: object) {
        super(props);
        this.state = {
            count: 0
        };
    }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div 
                style={{
                    width: "250px",
                    padding: "20px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #f6d365, #fda085)",
                    color: "#fff",
                    textAlign: "center",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                    margin: "50px auto"
                }}
            >
                <h2 style={{ marginBottom: "15px" }}>Count: {this.state.count}</h2>
                <button 
                    onClick={this.handleClick} 
                    style={{
                        padding: "10px 20px",
                        fontSize: "16px",
                        borderRadius: "8px",
                        border: "none",
                        cursor: "pointer",
                        background: "#fff",
                        color: "#f57c00",
                        fontWeight: "bold",
                        boxShadow: "0 3px 6px rgba(0,0,0,0.15)",
                        transition: "all 0.2s ease",
                    }}
                    onMouseEnter={e => {
                        (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.05)";
                        (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 5px 12px rgba(0,0,0,0.25)";
                    }}
                    onMouseLeave={e => {
                        (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
                        (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 3px 6px rgba(0,0,0,0.15)";
                    }}
                >
                    Click me!
                </button>
            </div>
        );
    }
}
