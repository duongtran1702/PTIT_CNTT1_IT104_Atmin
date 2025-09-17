export const About = () => {
    return (
        <div
            style={{
                padding: '40px',
                minHeight: '80vh',
                textAlign: 'center',
            }}
        >
            <h2 style={{ color: '#333', marginBottom: '20px' }}>
                Giới thiệu bản thân
            </h2>
            <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#444' }}>
                Xin chào! Tôi là{' '}
                <b style={{ color: '#1677ff' }}>Nguyễn Văn A</b>, một lập trình
                viên Frontend đầy đam mê. Tôi yêu thích việc xây dựng các ứng
                dụng web hiện đại và tối ưu trải nghiệm người dùng.
            </p>
            <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#444' }}>
                <b>Sở thích:</b> Đọc sách, viết code và đi du lịch.
            </p>
            <p
                style={{
                    marginTop: '20px',
                    fontSize: '18px',
                    color: '#555',
                }}
            >
                <b>Mục tiêu:</b> Trở thành một lập trình viên xuất sắc và tạo ra
                những sản phẩm công nghệ có giá trị!
            </p>
        </div>
    );
};
