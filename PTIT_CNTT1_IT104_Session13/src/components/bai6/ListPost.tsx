import { Component } from 'react';
import DetailPost from './DetailPost';

interface Post {
    id: number;
    title: string;
    content: string;
    author: string;
}

const data: Post[] = [
    {
        id: 1,
        title: 'React Basics',
        content:
            'Học các khái niệm cơ bản về React như component, state và props.',
        author: 'Atmin Trần',
    },
    {
        id: 2,
        title: 'TypeScript Tips',
        content: 'Một số mẹo khi sử dụng TypeScript cùng với React.',
        author: 'Nguyen Van A',
    },
    {
        id: 3,
        title: 'CSS Grid Guide',
        content: 'Hướng dẫn sử dụng CSS Grid để tạo layout responsive.',
        author: 'Tran Thi B',
    },
    {
        id: 4,
        title: 'Node.js Introduction',
        content: 'Giới thiệu về Node.js và cách xây dựng server cơ bản.',
        author: 'Le Van C',
    },
];

export default class ListPost extends Component {
    state: Post[] = data;
    render() {
        return <div><DetailPost data={this.state}/></div>;
    }
}
