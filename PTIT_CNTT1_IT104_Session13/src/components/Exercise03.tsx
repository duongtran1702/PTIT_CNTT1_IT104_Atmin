import { Component } from 'react';

type User = {
    id: number;
    name: string;
    age: number;
};

const data: User[] = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 22 },
    { id: 4, name: 'Atmin', age: 28 },
    { id: 5, name: 'Eve', age: 26 },
];

const itemCss: React.CSSProperties = {
    border: '1px solid black',
    padding: '5px',
};

export default class Exercise03 extends Component {
    state: { data: User[] } = { data: data };
    render() {
        return (
            <table
                style={{
                    border: '1px solid black',
                    borderCollapse: 'collapse',
                }}
            >
                <thead>
                    <tr>
                        <th style={itemCss}>ID</th>
                        <th style={itemCss}>Name</th>
                        <th style={itemCss}>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map((user) => (
                        <tr key={user.id}>
                            <td style={itemCss}>{user.id}</td>
                            <td style={itemCss}>{user.name}</td>
                            <td style={itemCss}>{user.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}
