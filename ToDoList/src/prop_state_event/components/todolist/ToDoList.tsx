import { Component } from 'react';
import './ToDoList.css';

type Job = {
    id: number;
    name: string;
    isCompleted: boolean;
};

type StateTypes = {
    jobs: Job[];
    isShowError: boolean;
    inputValue: string;
};

export default class Todolist extends Component<object, StateTypes> {
    constructor(props: object) {
        super(props);

        // Khai báo state
        this.state = {
            jobs: [],
            isShowError: false,
            inputValue: '',
        };
    }
    render() {
        console.log('Jobs: ', this.state.jobs);

        // Lấy giá trị trong input và cập nhật cho State
        const handleChangeValue = (
            event: React.ChangeEvent<HTMLInputElement>
        ) => {
            // Validate dữ liệu
            const { value } = event.target;

            if (!value) {
                this.setState({
                    isShowError: true,
                });
            } else {
                this.setState({
                    isShowError: false,
                });
            }

            // Cập nhật lại giá trị cho state
            this.setState({
                inputValue: value,
            });
        };

        // Hàm thêm mới công việc
        const handleSubmit = (): void => {
            // Validate dữ liệu
            if (!this.state.inputValue) {
                this.setState({
                    isShowError: true,
                });
            } else {
                // Nếu như dữ liệu đầu vào đã thỏa mãn
                const newJob: Job = {
                    id: Math.ceil(Math.random() * 10000),
                    name: this.state.inputValue,
                    isCompleted: false,
                };

                // Cập nhật lại giá trị của jobs
                this.setState({
                    jobs: [...this.state.jobs, newJob],
                    inputValue: '', // Clean giá trị trong input
                });
            }
        };

        // Hàm cập nhật trạng thái công việc
        const hanleChecked = (id: number) => {
            // Map danh sách công việc và cập nhật trạng thái của công việc đó
            const newJobs = this.state.jobs.map((jobItem: Job) => {
                // Tìm công việc theo id cần cập nhật
                if (jobItem.id === id) {
                    jobItem.isCompleted = !jobItem.isCompleted;
                }

                return jobItem;
            });

            // Cập nhật lại giá trị của state
            this.setState({
                jobs: newJobs,
            });
        };

        // hàm xóa công việc
        const handleDelete = (id: number) => {
            const filterJobs = this.state.jobs.filter(
                (job: Job) => job.id !== id
            );

            // Cập nhật lại state jobs
            this.setState({
                jobs: filterJobs,
            });
        };
        return (
            <>
                <div className="container">
                    {/* Header */}
                    <div className="header">
                        <h1>📝 TodoList</h1>
                        <p>Quản lý công việc hiệu quả</p>
                    </div>
                    {/* Input Section */}
                    <div className="input-section">
                        <div className="input-group">
                            <input
                                value={this.state.inputValue}
                                onChange={handleChangeValue}
                                type="text"
                                className="task-input"
                                placeholder="Nhập công việc cần làm..."
                                maxLength={100}
                            />
                            <button onClick={handleSubmit} className="add-btn">
                                ➕ Thêm
                            </button>
                        </div>
                        {this.state.isShowError && (
                            <div className="error-message">
                                Tên công việc không được để trống.
                                {/* Thông báo lỗi sẽ hiển thị ở đây */}
                            </div>
                        )}
                    </div>

                    {/* Hiển thị danh sách công việc theo điều kiện */}
                    {this.state.jobs.length === 0 ? (
                        <>
                            {/* Empty State */}
                            <div className="empty-state">
                                <div className="empty-state-icon">📋</div>
                                <div className="empty-state-text">
                                    Chưa có công việc nào
                                </div>
                                <div className="empty-state-subtext">
                                    Hãy thêm công việc đầu tiên của bạn!
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Todo List */}
                            <div className="todo-list">
                                {this.state.jobs.map((jobItem: Job) => (
                                    <div className="todo-item">
                                        <input
                                            onChange={() =>
                                                hanleChecked(jobItem.id)
                                            }
                                            checked={jobItem.isCompleted}
                                            type="checkbox"
                                            className="todo-checkbox"
                                        />
                                        {jobItem.isCompleted ? (
                                            <s className="todo-text">
                                                {jobItem.name}
                                            </s>
                                        ) : (
                                            <span className="todo-text">
                                                {jobItem.name}
                                            </span>
                                        )}

                                        <div className="todo-actions">
                                            <button
                                                onClick={() =>
                                                    handleDelete(jobItem.id)
                                                }
                                                className="delete-btn"
                                            >
                                                🗑️ Xóa
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    {/* Footer */}
                    <div className="footer">
                        <div className="task-counter">
                            Đã hoàn thành:{' '}
                            <span className="counter-number">
                                {
                                    this.state.jobs.filter(
                                        (job: Job) => job.isCompleted
                                    ).length
                                }
                            </span>{' '}
                            /
                            <span className="counter-number">
                                {this.state.jobs.length}
                            </span>{' '}
                            công việc
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
