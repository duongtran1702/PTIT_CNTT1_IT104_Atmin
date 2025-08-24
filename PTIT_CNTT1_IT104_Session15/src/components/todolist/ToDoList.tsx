import { Component } from 'react';
import Header from './header/Header';
import './ToDoList.css'

export default class ToDoList extends Component {
    render() {
        return (
            <div className='container'>
                <Header>Thêm công việc mới</Header>
            </div>
        );
    }
}
