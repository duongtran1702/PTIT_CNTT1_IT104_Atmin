import { Component } from 'react';
import styles from './ToDoList.module.css';

interface Work {
    id: number;
    name: string;
    assign: string;
    status: boolean;
    time: string;
}

interface Work {
    id: number;
    name: string;
    assign: string;
    status: boolean;
    time: string;
}

const works: Work[] = [
    {
        id: 1,
        name: 'Fix login bug',
        assign: 'Atmin',
        status: false,
        time: '2025-08-21 10:00',
    },
    {
        id: 2,
        name: 'Design homepage',
        assign: 'Chalotte',
        status: true,
        time: '2025-08-21 14:00',
    },
    {
        id: 3,
        name: 'Write unit tests',
        assign: 'Skirk',
        status: false,
        time: '2025-08-21 18:30',
    },
];

export default class ToDoList extends Component {
    state: Work[] = works;
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.item}>
                    <div className={styles.stt}>STT </div>
                    <div className={styles.name}>Tên công việc</div>
                    <div className={styles.assign}>Người thực hiện</div>
                    <div className={styles.status}>Trạng thái</div>
                    <div className={styles.time}>Thời gian tạo</div>
                    <div className={styles.act}>Chức năng</div>
                </div>
                {this.state.map((work) => (
                    <div className={styles.item} key={work.id}>
                        <div className={styles.stt}>{work.id}</div>
                        <div className={styles.name}>{work.name}</div>
                        <div className={styles.assign}>{work.assign}</div>
                        <div className={styles.status}>
                            {work.status ? <div className={styles.completed}>Hoàn thành</div> : <div className={styles.incompleted}> Chưa hoàn thành</div>}
                        </div>
                        <div className={styles.time}>{work.time}</div>
                        <div className={styles.act}>
                            <button className={styles.delete}>Xóa</button>
                            <button className={styles.edit}>Sửa</button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
