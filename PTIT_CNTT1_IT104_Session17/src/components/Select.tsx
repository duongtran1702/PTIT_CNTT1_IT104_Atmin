import { useState } from 'react';

export default function Select() {
    const [city, setCity] = useState<string>('');

    const cities = [
        'Hà Nội',
        'TP. Hồ Chí Minh',
        'Đà Nẵng',
        'Hải Phòng',
        'Cần Thơ',
        'Nha Trang',
        'Đà Lạt',
        'Huế',
        'Vũng Tàu',
        'Quy Nhơn',
    ];

    return (
        <div
            style={{
                maxWidth: 420,
                margin: '60px auto',
                padding: 30,
                borderRadius: 16,
                background: 'linear-gradient(135deg, #89f7fe, #66a6ff)',
                boxShadow: '0 6px 18px rgba(0,0,0,0.15)',
                textAlign: 'center',
                fontFamily: 'Segoe UI, sans-serif',
            }}
        >
            <h2
                style={{
                    color: '#fff',
                    marginBottom: 20,
                    fontSize: 22,
                    fontWeight: 600,
                }}
            >
                Chọn thành phố
            </h2>

            {/* Select thành phố */}
            <div style={{ marginTop: 14, textAlign: 'left' }}>
                <select
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    style={{
                        width: '100%',
                        boxSizing: 'border-box',
                        padding: 12,
                        borderRadius: 10,
                        border: '1px solid rgba(255,255,255,0.4)',
                        background: 'rgba(255,255,255,0.95)',
                        fontSize: 15,
                        outline: 'none',
                        cursor: 'pointer',
                    }}
                >
                    <option value="" disabled>
                        -- Chọn một thành phố --
                    </option>
                    {cities.map((c) => (
                        <option key={c} value={c}>
                            {c}
                        </option>
                    ))}
                </select>
            </div>

            {city && (
                <div style={{ marginTop: 8, color: '#fff' }}>
                    Bạn đã chọn: <b>{city}</b>
                </div>
            )}
        </div>
    );
}
