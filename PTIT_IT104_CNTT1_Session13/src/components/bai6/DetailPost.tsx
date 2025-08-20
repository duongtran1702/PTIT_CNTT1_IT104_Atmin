import { Component } from 'react';

interface Post {
    id: number;
    title: string;
    content: string;
    author: string;
}

interface PostProp {
    data: Post[];
}

// Style chung
const containerStyle: React.CSSProperties = {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#f9f9f9',
   
};

const headerStyle: React.CSSProperties = {
    padding: '10px 0px',
    marginBottom: '15px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    borderBottom: '2px solid #007bff',
    width: 'fit-content',
};

const postCard: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '15px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    cursor: 'pointer',
    width: '500px',
};

const postCardHover: React.CSSProperties = {
    ...postCard,
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
};

const itemStyle: React.CSSProperties = {
    margin: '5px 0',
    fontSize: '16px',
    color: '#555',
};

const titleStyle: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: '8px',
};

export default class DetailPost extends Component<PostProp, { hoverId: number | null }> {
    constructor(props: PostProp) {
        super(props);
        this.state = { hoverId: null };
    }

    render() {
        const { data } = this.props;
        const { hoverId } = this.state;

        return (
            <div style={containerStyle}>
                <h2 style={headerStyle}>Danh sách bài viết</h2>
                {data.map((post) => (
                    <div
                        key={post.id}
                        style={hoverId === post.id ? postCardHover : postCard}
                        onMouseEnter={() => this.setState({ hoverId: post.id })}
                        onMouseLeave={() => this.setState({ hoverId: null })}
                    >
                        <div style={titleStyle}>{post.title}</div>
                        <div style={itemStyle}>📌 Id: {post.id} </div>
                        <div style={itemStyle}>📝 Content: {post.content}</div>
                        <div style={itemStyle}>✍️ Author: {post.author}</div>
                    </div>
                ))}
            </div>
        );
    }
}
