import { useContext, type ChangeEvent } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function ChangeLanguage() {
  const { language, changeLanguage } = useContext(LanguageContext);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectLang = e.target.value as "en" | "vi";
    changeLanguage(selectLang);
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: 400,
    margin: "50px auto",
    padding: 30,
    borderRadius: 20,
    background: "#ffe4e1",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    textAlign: "center",
    fontFamily: "'Comic Sans MS', cursive, sans-serif",
  };

  const selectStyle: React.CSSProperties = {
    padding: 10,
    borderRadius: 10,
    border: "2px solid #ffb6c1",
    outline: "none",
    fontSize: 16,
    marginLeft: 10,
    cursor: "pointer",
  };

  const messageStyle: React.CSSProperties = {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  };

  const flexRow: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    fontSize: 18,
  };

  return (
    <div style={containerStyle}>
      <div style={flexRow}>
        🌐 Ngôn ngữ hiện tại là:
        <select value={language} onChange={handleChange} style={selectStyle}>
          <option value="vi">Tiếng Việt</option>
          <option value="en">English</option>
        </select>
      </div>

      <div style={messageStyle}>
        {language === "vi" ? "Xin Chào 👋" : "Hello 👋"}
      </div>
    </div>
  );
}
