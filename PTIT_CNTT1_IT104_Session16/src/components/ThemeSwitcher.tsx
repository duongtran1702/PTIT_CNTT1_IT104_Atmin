import { Component } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

type State = { isDarkMode: boolean };

export default class ThemeSwitcher extends Component<object, State> {
  state: State = { isDarkMode: false };

  toggleTheme = () => this.setState({ isDarkMode: !this.state.isDarkMode });

  render() {
    const { isDarkMode } = this.state;

    const containerStyle = {
      width: 350,
      margin: "60px auto",
      padding: 35,
      borderRadius: 24,
      textAlign: "center" as const,
      background: isDarkMode
        ? "linear-gradient(135deg, #1f1f1f, #333333)"
        : "linear-gradient(135deg, #ffffff, #e0f7fa)",
      color: isDarkMode ? "#f5f5f5" : "#111",
      boxShadow: "0 12px 25px rgba(0,0,0,0.25)",
      transition: "all 0.4s ease",
      fontFamily: "Arial, sans-serif",
    };

    const buttonStyle = {
      padding: "14px 28px",
      fontSize: 16,
      borderRadius: 14,
      border: "none",
      cursor: "pointer",
      background: isDarkMode ? "#4b5563" : "#3b82f6",
      color: "#fff",
      fontWeight: 600,
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      justifyContent: "center",
      marginTop: 25,
      transition: "all 0.3s ease",
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    } as const;

    return (
      <div style={containerStyle}>
        <h2
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 14,
            marginBottom: 25,
            fontSize: 26,
            fontWeight: 600,
          }}
        >
          {isDarkMode ? <FaMoon color="#fbbf24" size={32} /> : <FaSun color="#facc15" size={32} />}
          Theme Switcher
        </h2>
        <p style={{ fontSize: 18, marginBottom: 15 }}>
          Chế độ hiện tại: <strong>{isDarkMode ? "Tối" : "Sáng"}</strong>
        </p>
        <button
          style={buttonStyle}
          onClick={this.toggleTheme}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          {isDarkMode ? (
            <>
              <FaSun /> Chuyển sang sáng
            </>
          ) : (
            <>
              <FaMoon /> Chuyển sang tối
            </>
          )}
        </button>
      </div>
    );
  }
}
