import { useState } from "react";

export default function InputField() {
  const [content, setContent] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      width: "300px",
      margin: "20px",
      padding: "20px",
      borderRadius: "14px",
      background: "#ffffff",
      boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
      fontFamily: "Segoe UI, sans-serif",
      textAlign: "left",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    title: {
      marginBottom: "12px",
      fontSize: "18px",
      fontWeight: 600,
      color: "#333",
    },
    input: {
      width: "80%",
      padding: "12px 16px",
      fontSize: "15px",
      border: `1.5px solid ${isFocused ? "#6366f1" : "#ccc"}`,
      borderRadius: "10px",
      outline: "none",
      transition: "all 0.25s ease",
      boxShadow: isFocused
        ? "0 0 0 4px rgba(99, 102, 241, 0.2)"
        : "none",
    },
    warning: {
      marginTop: "12px",
      padding: "10px 14px",
      background: "#fff5f5",
      color: "#b91c1c",
      border: "1px solid #fecaca",
      borderRadius: "10px",
      fontSize: "14px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    warningIcon: {
      fontWeight: "bold",
      fontSize: "16px",
    },
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Test the length of input string</h3>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Enter here..."
        style={styles.input}
      />
      {content.length > 5 && (
        <div style={styles.warning}>
          <span style={styles.warningIcon}>⚠</span>
          String input is longer than 5 characters
        </div>
      )}
    </div>
  );
}
