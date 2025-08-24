import { Component } from 'react';
import './Header.css';

interface Props {
    onOpenForm: () => void;
}

export default class Header extends Component<Props> {
    render() {
        return (
            <header className="header">
                <h2>Quản lý sinh viên</h2>
                <button className="btn-add-1" onClick={this.props.onOpenForm}>
                    Thêm mới sinh viên
                </button>
            </header>
        );
    }
}
