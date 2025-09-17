import { useParams } from 'react-router-dom';

const posts = [
    {
        id: 1,
        title: 'Bắt đầu với React',
        content:
            'React là thư viện JavaScript để xây dựng giao diện người dùng...',
    },
    {
        id: 2,
        title: 'JSX là gì?',
        content:
            'JSX là cú pháp mở rộng của JavaScript, cho phép viết code giống HTML...',
    },
    {
        id: 3,
        title: 'Component trong React',
        content:
            'Component là khối xây dựng UI trong React. Có 2 loại: Class và Function...',
    },
    {
        id: 4,
        title: 'React Router cơ bản',
        content:
            'React Router cho phép điều hướng giữa các trang mà không reload...',
    },
    {
        id: 5,
        title: 'Hooks trong React',
        content:
            'Hooks cho phép dùng state và lifecycle trong function component...',
    },
];

export default function PostDetail() {
    const { id } = useParams();
    const post = posts.find((p) => p.id === Number(id));

    if (!post)
        return (
            <p style={{ color: 'red', fontSize: '1.2rem' }}>
                Không tìm thấy bài viết
            </p>
        );

    return (
        <div
            style={{
                background: '#fff',
                padding: '30px',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
        >
            <h2
                style={{
                    fontSize: '2rem',
                    marginBottom: '15px',
                    color: '#2c3e50',
                }}
            >
                {post.title}
            </h2>
            <p
                style={{
                    fontSize: '1.1rem',
                    color: '#34495e',
                    lineHeight: '1.6',
                }}
            >
                {post.content}
            </p>
        </div>
    );
}
