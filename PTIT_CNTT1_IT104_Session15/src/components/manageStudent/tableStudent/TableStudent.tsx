import { Component } from 'react';
import type { Student } from '../form/StudentForm';
import styles from './TableStudent.module.css';

interface Props {
    data: Student[];
    onDelete: (id: number) => void;
    onToggleStatus: (id: number) => void;
    onEdit: (student: Student) => void;
}

export default class TableStudent extends Component<Props> {
    render() {
        const { data, onDelete, onToggleStatus, onEdit } = this.props;

        return (
            <div className={styles.container}>
                <div className={styles.item}>
                    <div className={styles.stt}>STT</div>
                    <div className={styles.msv}>Mã sinh viên</div>
                    <div className={styles.name}>Tên sinh viên</div>
                    <div className={styles.name}>Ngày sinh</div>
                    <div className={styles.email}>Email</div>
                    <div className={styles.status}>Trạng thái</div>
                    <div className={styles.act}>Chức năng</div>
                </div>

                {data.map((user) => (
                    <div className={styles.item} key={user.id}>
                        <div className={styles.stt}>{user.id}</div>
                        <div className={styles.msv}>{user.msv}</div>
                        <div className={styles.name}>{user.name}</div>
                        <div className={styles.name}>{user.dob}</div>
                        <div className={styles.email}>{user.email}</div>
                        <div className={styles.status}>
                            {user.status ? (
                                <div className={styles.completed}>Đang hoạt động</div>
                            ) : (
                                <div className={styles.incompleted}>Ngưng hoạt động</div>
                            )}
                        </div>
                        <div className={styles.act}>
                            <button
                                className={styles.block}
                                onClick={() => onToggleStatus(user.id)}
                            >
                                {user.status ? 'Chặn' : 'Mở'}
                            </button>
                            <button className={styles.delete} onClick={() => onDelete(user.id)}>
                                Xóa
                            </button>
                            <button className={styles.edit} onClick={() => onEdit(user)}>
                                Sửa
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
