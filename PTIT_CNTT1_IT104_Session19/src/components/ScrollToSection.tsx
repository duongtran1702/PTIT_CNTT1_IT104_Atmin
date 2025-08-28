import { useRef } from 'react';

// 🎨 Style constants
const sectionStyle: React.CSSProperties = {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontFamily: 'sans-serif',
};

const headerStyle: React.CSSProperties = {
    ...sectionStyle,
    background: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
    color: 'white',
    textAlign: 'center',
};

const contentStyle: React.CSSProperties = {
    ...sectionStyle,
    background: '#f9fafb',
    color: '#111827',
    padding: '0 20px',
    textAlign: 'center',
};

const targetStyle: React.CSSProperties = {
    ...sectionStyle,
    background: 'linear-gradient(135deg, #10b981, #34d399)',
    color: 'white',
    fontSize: '1.5rem',
};

const buttonStyle: React.CSSProperties = {
    marginTop: '20px',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '12px',
    background: 'white',
    color: '#2563eb',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    transition: 'all 0.3s ease',
};

export default function ScrollPage() {
    const targetRef = useRef<HTMLDivElement | null>(null);

    const scrollToTarget = () =>
        targetRef.current?.scrollIntoView({ behavior: 'smooth' });

    return (
        <>
            {/* Section 1 */}
            <div style={headerStyle}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
                    🚀 Welcome to Scroll Demo
                </h1>
                <button
                    style={buttonStyle}
                    onMouseOver={(e) =>
                        ((e.target as HTMLButtonElement).style.transform =
                            'scale(1.05)')
                    }
                    onMouseOut={(e) =>
                        ((e.target as HTMLButtonElement).style.transform =
                            'scale(1)')
                    }
                    onClick={scrollToTarget}
                >
                    Scroll Down 👇
                </button>
            </div>

            {/* Section 2 */}
            <div style={contentStyle} >
                <p
                    style={{
                        maxWidth: '600px',
                        fontSize: '1.1rem',
                        lineHeight: '1.6',
                    }}
                >
                    Trong giờ thực hành môn hóa, thầy giáo đang giảng về các
                    tính chất của vàng: “Vàng có vẻ ngoài sáng bóng, đồng thời
                    có khả năng dẫn nhiệt và dẫn điện tốt. Vậy ai cho thầy biết
                    còn tính chất nào mà thầy chưa nhắc đến không?”. Khi thấy
                    Minh đang có vẻ ngủ gật, thầy liền bất ngờ gọi: “Minh, em
                    nói cho thầy biết vàng còn tính chất nào nữa?”. Trong cơn
                    buồn ngủ, Minh ngơ ngác đáp: - Dạ, vàng còn dễ bay hơi nữa
                    ạ! - Tại sao lại nói như vậy? - Dạ chắc, nếu không tin thì
                    thầy cứ lấy cục vàng bỏ ra ngoài đường xem, đảm bảo "bay"
                    ngay lập tức.
                </p>
            </div>

            {/* Section 3 (Target) */}
            <div ref={targetRef} style={targetStyle}>
                🎯 You have reached the target section!
            </div>
        </>
    );
}
