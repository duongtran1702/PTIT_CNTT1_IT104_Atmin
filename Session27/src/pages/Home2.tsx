import { Link } from "react-router-dom";

export const Home2 = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "80vh",
                background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
                borderRadius: "12px",
                padding: "40px",
                textAlign: "center",
            }}
        >
            <h1 style={{ fontSize: "2.5rem", color: "#2c3e50", marginBottom: "10px" }}>
                Trang chủ
            </h1>
            <p style={{ fontSize: "1.2rem", color: "#34495e", marginBottom: "20px" }}>
                Đây là trang chủ. Thử qua đường dẫn khác bằng nút bên dưới nhé!
            </p>
            <Link
                to="/bai7/about"
                style={{
                    padding: "10px 20px",
                    backgroundColor: "#6c5ce7",
                    color: "#fff",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: "bold",
                }}
            >
                About
            </Link>
        </div>
    );
};
