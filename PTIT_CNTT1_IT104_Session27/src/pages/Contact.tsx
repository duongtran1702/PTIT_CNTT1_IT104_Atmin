export const Contact = () => {
    return (
        <div
            style={{
                padding: '40px',
                minHeight: '80vh',
                textAlign: 'center',
            }}
        >
            <h2 style={{ color: '#333', marginBottom: '20px' }}>
                Thông tin liên hệ
            </h2>
            <p style={{ fontSize: '18px', marginBottom: '10px' }}>
                <b>Email:</b>{' '}
                <a
                    href="nva@gmail.com"
                    style={{ color: '#1677ff', textDecoration: 'none' }}
                >
                    nva@gmail.com
                </a>
            </p>
            <p style={{ fontSize: '18px', marginBottom: '10px' }}>
                <b>Số điện thoại:</b>{' '}
                <a
                    href="0123 456 789"
                    style={{ color: '#1677ff', textDecoration: 'none' }}
                >
                    0123 456 789
                </a>
            </p>
            <p style={{ fontSize: '18px' }}>
                <b>FaceBook:</b>{' '}
                <a
                    href="https://www.facebook.com/ddangtoan0502/map"
                    style={{ color: '#1677ff', textDecoration: 'none' }}
                >
                    Phở bò của Toàn
                </a>
            </p>
        </div>
    );
};
