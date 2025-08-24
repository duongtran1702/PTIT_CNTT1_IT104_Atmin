import { Component } from 'react';
import './Filter.css';
import type { Student } from '../form/StudentForm';

interface Props {
    data: Student[];
    search: string;
    sort: 'default' | 'name' | 'age';
    onSearchChange: (search: string) => void;
    onSortChange: (sort: 'default' | 'name' | 'age') => void;
}

export default class Filter extends Component<Props> {
    handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.onSearchChange(e.target.value);
    };

    handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value as 'default' | 'name' | 'age';
        this.props.onSortChange(value);
    };

    render() {
        const { search, sort } = this.props;

        return (
            <div className="container-1">
                <div></div>
                <div className="container-filter">
                    <select
                        className="filter-form"
                        value={sort}
                        onChange={this.handleSort}
                    >
                        <option value="default">Mặc định</option>
                        <option value="name">Sắp xếp theo tên</option>
                        <option value="age">Sắp xếp theo tuổi</option>
                    </select>
                    <input
                        className="search-form"
                        type="text"
                        placeholder="Tìm kiếm theo tên hoặc email"
                        value={search}
                        onChange={this.handleSearch}
                    />
                </div>
            </div>
        );
    }
}
