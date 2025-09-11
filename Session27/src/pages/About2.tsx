import { Link } from "react-router-dom";

export const About2 = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "80vh",
                background: "linear-gradient(135deg, #dfe9f3, #ffffff)",
                borderRadius: "12px",
                padding: "40px",
                textAlign: "center",
            }}
        >
            <h1 style={{ fontSize: "2.5rem", color: "#0984e3", marginBottom: "10px" }}>
                About
            </h1>
            <p style={{ fontSize: "1.2rem", color: "#2d3436", marginBottom: "20px" }}>
                Trang giới thiệu. Bạn có thể quay lại trang chủ.
            </p>
            <Link
                to="/bai7/home"
                style={{
                    padding: "10px 20px",
                    backgroundColor: "#00cec9",
                    color: "#fff",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: "bold",
                }}
            >
                Quay về trang chủ
            </Link>
        </div>
    );
};
