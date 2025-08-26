import React, { useState } from "react";

export default function Checkbox() {
  const [selected, setSelected] = useState<string[]>([]);
  const hobbies = [
    "Đọc sách",
    "Nghe nhạc",
    "Xem phim",
    "Chơi game",
    "Du lịch",
    "Nấu ăn",
    "Thể thao",
    "Vẽ tranh",
    "Chụp ảnh",
    "Học ngoại ngữ",
  ];

  const handleChange = (value: string, checked: boolean) => {
    if (checked) {
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter((item) => item !== value));
    }
  };

  // CSS viết riêng trong object
  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      maxWidth: 420,
      margin: "40px auto",
      padding: 20,
      borderRadius: 12,
      background: "linear-gradient(135deg, #89f7fe, #66a6ff)",
      boxShadow: "0 6px 18px rgba(0, 0, 0, 0.15)",
      fontFamily: "Segoe UI, sans-serif",
    },
    title: {
      textAlign: "center",
      marginBottom: 20,
      color: "#fff",
    },
    group: {
      marginBottom: 20,
    },
    item: {
      display: "block",
      marginBottom: 8,
      color: "#333",
      cursor: "pointer",
    },
    input: {
      marginRight: 8,
      cursor: "pointer",
    },
    selectedBox: {
      padding: 10,
      borderRadius: 8,
      background: "#fff",
      color: "#333",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Chọn sở thích</h2>

      <div style={styles.group}>
        {hobbies.map((hobby) => (
          <label key={hobby} style={styles.item}>
            <input
              type="checkbox"
              value={hobby}
              checked={selected.includes(hobby)}
              onChange={(e) => handleChange(hobby, e.target.checked)}
              style={styles.input}
            />
            <span>{hobby}</span>
          </label>
        ))}
      </div>

      <div style={styles.selectedBox}>
        Sở thích đã chọn:{" "}
        {selected.length > 0 ? selected.join(", ") : "Chưa chọn sở thích nào"}
      </div>
    </div>
  );
}
