import { Component } from "react";
import { FaLock, FaCheckCircle } from "react-icons/fa";

type StateType = {
  isLoggedIn: boolean;
};

export default class Bai2 extends Component<object, StateType> {
  state: StateType = {
    isLoggedIn: false,
  };

  toggleLogin = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  };

  render() {
    const { isLoggedIn } = this.state;

    const styles = {
      container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "250px",
        width: "fit-content",
        padding: "20px",
        margin: "20px auto",
        backgroundColor: "#1F2937",
        borderRadius: "16px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
      },
      card: {
        backgroundColor: "#E0F2FE",
        padding: "24px",
        borderRadius: "16px",
        textAlign: "center" as const,
        width: "280px",
        boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
      },
      message: {
        fontSize: "18px",
        marginBottom: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        fontWeight: 500,
        color: "#111",
      },
      button: {
        background: isLoggedIn
          ? "linear-gradient(90deg, #F87171, #DC2626)"
          : "linear-gradient(90deg, #60A5FA, #2563EB)",
        color: "white",
        border: "none",
        borderRadius: "8px",
        padding: "10px 25px",
        fontSize: "16px",
        cursor: "pointer",
        fontWeight: 600,
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        transition: "all 0.2s ease",
      },
    };

    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.message}>
            {isLoggedIn ? (
              <>
                <FaCheckCircle color="green" /> Xin chào, User!
              </>
            ) : (
              <>
                <FaLock color="orange" /> Vui lòng đăng nhập để tiếp tục.
              </>
            )}
          </div>
          <button
            style={styles.button}
            onMouseEnter={(e) => {
              const btn = e.currentTarget;
              btn.style.transform = "scale(1.05)";
              btn.style.boxShadow = "0 6px 14px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              const btn = e.currentTarget;
              btn.style.transform = "scale(1)";
              btn.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
            }}
            onClick={this.toggleLogin}
          >
            {isLoggedIn ? "Đăng xuất" : "Đăng nhập"}
          </button>
        </div>
      </div>
    );
  }
}
