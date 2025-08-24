import { Component } from 'react';
import './Pagination.css';

interface Props {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

export default class Pagination extends Component<Props> {
    handleClick = (page: number) => {
        this.props.onPageChange(page);
    };

    handlePrev = () => {
        if (this.props.currentPage > 1) {
            this.props.onPageChange(this.props.currentPage - 1);
        }
    };

    handleNext = () => {
        if (this.props.currentPage < this.props.totalPages) {
            this.props.onPageChange(this.props.currentPage + 1);
        }
    };

    render() {
        const { totalPages, currentPage } = this.props;
        if (totalPages <= 1) return null;

        const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

        return (
            <div className="pagination">
                <button
                    className="nav-btn"
                    disabled={currentPage === 1}
                    onClick={this.handlePrev}
                >
                    Pre
                </button>

                {pages.map(p => (
                    <button
                        key={p}
                        className={`page-btn ${p === currentPage ? 'active' : ''}`}
                        onClick={() => this.handleClick(p)}
                    >
                        {p}
                    </button>
                ))}

                <button
                    className="nav-btn"
                    disabled={currentPage === totalPages}
                    onClick={this.handleNext}
                >
                    Nxt
                </button>
            </div>
        );
    }
}
