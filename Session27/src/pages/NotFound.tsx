import { Link, useNavigate } from "react-router-dom";

export const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "80vh",
                background: "linear-gradient(135deg, #fdfbfb, #ebedee)",
                borderRadius: "12px",
                padding: "40px",
                textAlign: "center",
            }}
        >
            <h1 style={{ fontSize: "2rem", color: "#d63031", marginBottom: "10px" }}>
                Trang bạn tìm không tồn tại.
            </h1>
            <p style={{ color: "#636e72", marginBottom: "20px" }}>
                Có thể đường dẫn bị sai hoặc trang đã bị xóa.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
                <Link
                    to="/bai7/home"
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#0984e3",
                        color: "#fff",
                        borderRadius: "8px",
                        textDecoration: "none",
                        fontWeight: "bold",
                    }}
                >
                    Quay về trang chủ
                </Link>
                <button
                    onClick={() => navigate(-1)}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#636e72",
                        color: "#fff",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontWeight: "bold",
                    }}
                >
                    Quay lại
                </button>
            </div>
        </div>
    );
};
