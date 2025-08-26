import React, { useState } from "react";

export default function CountText() {
  const [text, setText] = useState<string>("");

  const countText = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setText(e.target.value);
  };

  return (
    <div
      style={{
        maxWidth: 420,
        margin: "60px auto",
        padding: 30,
        borderRadius: 16,
        background: "linear-gradient(135deg, #89f7fe, #66a6ff)",
        boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
        textAlign: "center",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <h2
        style={{
          color: "#fff",
          marginBottom: 20,
          fontSize: 22,
          fontWeight: 600,
        }}
      >
        Đếm ký tự
      </h2>
      <textarea
        onChange={countText}
        rows={6}
        value={text}
        placeholder="Nhập văn bản của bạn..."
        style={{
          width: "100%",
          boxSizing: "border-box", // ✅ fix lệch
          padding: 14,
          borderRadius: 10,
          border: "1px solid rgba(255,255,255,0.4)",
          outline: "none",
          resize: "none",
          fontSize: 15,
          lineHeight: "1.5",
          background: "rgba(255,255,255,0.9)",
          color: "#333",
        }}
      />
      <div
        style={{
          marginTop: 18,
          fontWeight: "bold",
          fontSize: 18,
          color: "#fff",
        }}
      >
        Số ký tự: {text.length}
      </div>
    </div>
  );
}
