import { useState, useEffect } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import './FeedBackApp.css';

interface Review {
    id: number;
    rating: number;
    text: string;
}

export default function FeedBackApp() {
    const [rating, setRating] = useState<number | null>(null);
    const [text, setText] = useState<string>('');
    const [reviews, setReviews] = useState<Review[]>([]);
    const [editId, setEditId] = useState<number | null>(null);

    // Load dữ liệu từ localStorage khi lần đầu render
    useEffect(() => {
        try {
            const saved = localStorage.getItem('reviews');
            if (saved) {
                setReviews(JSON.parse(saved));
            }
        } catch (err) {
            console.error('Lỗi khi đọc localStorage:', err);
        }
    }, []);

    // Lưu dữ liệu vào localStorage khi reviews thay đổi
    useEffect(() => {
        try {
            localStorage.setItem('reviews', JSON.stringify(reviews));
        } catch (err) {
            console.error('Lỗi khi lưu localStorage:', err);
        }
    }, [reviews]);

    const average =
        reviews.length > 0
            ? (
                  reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
              ).toFixed(1)
            : '0.0';

    const handleSend = () => {
        if (!rating) return;

        if (editId !== null) {
            // Cập nhật review đã chọn
            setReviews((prev) =>
                prev.map((r) =>
                    r.id === editId ? { ...r, rating: rating, text: text } : r
                )
            );
            setEditId(null);
        } else {
            // Thêm review mới
            setReviews((prev) => [
                ...prev,
                { id: Date.now(), rating: rating, text: text || '' },
            ]);
        }

        setText('');
        setRating(null);
    };

    const handleEdit = (id: number) => {
        const r = reviews.find((rv) => rv.id === id);
        if (!r) return;
        setRating(r.rating);
        setText(r.text);
        setEditId(id);
    };

    const handleDelete = (id: number) => {
        setReviews((prev) => prev.filter((r) => r.id !== id));
    };

    return (
        <div className="app">
            <h2 className="title">Feedback TA</h2>
            <div className="card">
                <h3>Thầy Phú dạy có hay không???</h3>
                <div className="rating-select">
                    {[...Array(10)].map((_, i) => (
                        <button
                            key={i + 1}
                            className={`rating-btn ${
                                rating === i + 1 ? 'active' : ''
                            }`}
                            onClick={() => setRating(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Nhập nội dung feedback"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button className="send-btn" onClick={handleSend}>
                        {editId !== null ? 'Update' : 'Send'}
                    </button>
                </div>
            </div>

            <div className="review-section">
                <div className="review-header">
                    <span>{reviews.length} reviews</span>
                    <span>Average rating: {average}</span>
                </div>
                {reviews.map((r) => (
                    <div className="review" key={r.id}>
                        <div className="rating-circle">{r.rating}</div>
                        <div className="review-content">
                            <p>{r.text}</p>
                        </div>
                        <div className="actions">
                            <button
                                onClick={() => handleEdit(r.id)}
                                title="Edit"
                            >
                                <FiEdit size={18} />
                            </button>
                            <button
                                onClick={() => handleDelete(r.id)}
                                title="Delete"
                            >
                                <FiTrash2 size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
