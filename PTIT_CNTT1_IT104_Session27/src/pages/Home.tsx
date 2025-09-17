export const Home = () => {
    return (
        <div
            style={{
                margin: "50px auto",
                padding: "30px",
                textAlign: "center",
                borderRadius: "15px",
            }}
        >
            <h3
                style={{
                    fontSize: "24px",
                    color: "#1890ff",
                    marginBottom: "20px",
                }}
            >
                Chào mừng đến với ứng dụng giới thiệu bản thân
            </h3>
            <p
                style={{
                    fontSize: "18px",
                    color: "#333",
                    lineHeight: "1.6",
                }}
            >
                Đây là ứng dụng đơn giản giúp bạn tìm hiểu thêm về tôi. Hãy khám
                phá các trang khác để biết thêm chi tiết.
            </p>
        </div>
    );
};
