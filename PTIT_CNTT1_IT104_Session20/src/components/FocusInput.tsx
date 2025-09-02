import { useEffect, useRef, useState } from "react";

export default function FocusInput() {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleModal = () => {
        setIsOpenModal((pre) => !pre);
    };

    useEffect(() => {
        if (isOpenModal && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpenModal]);

    // CSS inline
    const overlayStyles: React.CSSProperties = {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
    };

    const modalStyles: React.CSSProperties = {
        background: "#fff",
        borderRadius: "12px",
        padding: "30px",
        width: "300px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        textAlign: "center",
    };

    const inputStyles: React.CSSProperties = {
        width: "100%",
        padding: "10px",
        margin: "10px 0",
        borderRadius: "8px",
        border: "1px solid #ccc",
        fontSize: "16px",
        outline: "none",
    };

    const buttonStyles: React.CSSProperties = {
        padding: "10px 15px",
        marginTop: "10px",
        border: "none",
        borderRadius: "8px",
        background: "#007bff",
        color: "#fff",
        cursor: "pointer",
        fontSize: "14px",
    };

    return (
        <div style={{ margin: "20px" }}>
            <button style={buttonStyles} onClick={handleModal}>
                Mở modal
            </button>

            {isOpenModal && (
                <div style={overlayStyles}>
                    <div style={modalStyles}>
                        <h2>Đăng nhập</h2>
                        <input type="text" ref={inputRef} style={inputStyles} placeholder="Nhập tên..." />
                        <button style={buttonStyles} onClick={handleModal}>
                            Đóng modal
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
