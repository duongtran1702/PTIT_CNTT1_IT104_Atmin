import { Link } from 'react-router-dom';

const posts = [
    {
        id: 1,
        title: 'Bắt đầu với React',
        excerpt: 'Giới thiệu React và cách hoạt động...',
    },
    {
        id: 2,
        title: 'JSX là gì?',
        excerpt: 'Tìm hiểu cú pháp JSX trong React...',
    },
    {
        id: 3,
        title: 'Component trong React',
        excerpt: 'Cách chia nhỏ UI thành các component...',
    },
    {
        id: 4,
        title: 'React Router cơ bản',
        excerpt: 'Điều hướng trong React app...',
    },
    {
        id: 5,
        title: 'Hooks trong React',
        excerpt: 'useState, useEffect và các hooks khác...',
    },
];

export default function Posts() {
    return (
        <div>
            <h2
                style={{
                    fontSize: '2rem',
                    marginBottom: '20px',
                    color: '#2c3e50',
                }}
            >
                Danh sách bài viết
            </h2>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '20px',
                }}
            >
                {posts.map((post) => (
                    <div
                        key={post.id}
                        style={{
                            background: '#fff',
                            padding: '20px',
                            borderRadius: '12px',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                            transition: 'transform 0.2s',
                        }}
                    >
                        <h3 style={{ margin: '0 0 10px' }}>
                            <Link
                                to={`/blog/posts/${post.id}`}
                                style={{
                                    textDecoration: 'none',
                                    color: '#2980b9',
                                    fontSize: '1.2rem',
                                }}
                            >
                                {post.title}
                            </Link>
                        </h3>
                        <p style={{ color: '#7f8c8d' }}>{post.excerpt}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
