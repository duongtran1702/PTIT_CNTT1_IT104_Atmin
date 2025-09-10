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
    const [text, setText] = useState('');
    const [reviews, setReviews] = useState<Review[]>([]);
    const [editId, setEditId] = useState<number | null>(null);

    // Load dữ liệu từ localStorage khi component mount
    useEffect(() => {
        try {
            const saved = localStorage.getItem('reviews');
            if (saved) setReviews(JSON.parse(saved));
        } catch (err) {
            console.error('Lỗi khi đọc localStorage:', err);
        }
    }, []);

    const average =
        reviews.length > 0
            ? +(reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
            : 0;

    const handleSend = () => {
        if (rating === null) {
            alert('Vui lòng chọn rating!');
            return;
        }

        let newReviews: Review[];
        if (editId !== null) {
            // Cập nhật review
            newReviews = reviews.map((r) =>
                r.id === editId ? { ...r, rating, text } : r
            );
        } else {
            // Thêm review mới
            newReviews = [...reviews, { id: Date.now(), rating, text }];
        }

        // Cập nhật state và localStorage
        setReviews(newReviews);
        try {
            localStorage.setItem('reviews', JSON.stringify(newReviews));
        } catch (err) {
            console.error('Lỗi khi lưu localStorage:', err);
        }

        // Reset form
        setText('');
        setRating(null);
        setEditId(null);
    };

    const handleEdit = (id: number) => {
        const r = reviews.find((rv) => rv.id === id);
        if (!r) return;
        setRating(r.rating);
        setText(r.text);
        setEditId(id);
    };

    const handleDelete = (id: number) => {
        const newReviews = reviews.filter((r) => r.id !== id);
        setReviews(newReviews);
        try {
            localStorage.setItem('reviews', JSON.stringify(newReviews));
        } catch (err) {
            console.error('Lỗi khi lưu localStorage:', err);
        }
    };

    return (
        <div className="app">
            <h2 className="title">Feedback TA</h2>
            <div className="card">
                <h3>Thầy Phú dạy có hay không???</h3>

                {/* Rating */}
                <div className="rating-select">
                    {[...Array(10)].map((_, i) => (
                        <button
                            key={i + 1}
                            className={`rating-btn ${rating === i + 1 ? 'active' : ''}`}
                            onClick={() => setRating(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>

                {/* Input */}
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

            {/* Review Section */}
            <div className="review-section">
                <div className="review-header">
                    <span>{reviews.length} reviews</span>
                    <span>Average rating: {average}</span>
                </div>

                {reviews.length === 0 && <p className="no-review">Chưa có feedback nào.</p>}

                {reviews.map((r) => (
                    <div className="review" key={r.id}>
                        <div className="rating-circle">{r.rating}</div>
                        <div className="review-content">
                            <p>{r.text}</p>
                        </div>
                        <div className="actions">
                            <button onClick={() => handleEdit(r.id)} title="Edit">
                                <FiEdit size={18} />
                            </button>
                            <button onClick={() => handleDelete(r.id)} title="Delete">
                                <FiTrash2 size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
