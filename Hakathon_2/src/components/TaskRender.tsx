import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import type { Task } from './StickyNote';
import { Modal } from 'antd';
import { useState } from 'react';
interface TaskProp {
    data: Task;
    onDelete: (id: number) => void;
}
export default function TaskRender({ data, onDelete }: TaskProp) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        onDelete(data.id);
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="task">
            <div> {data.title}</div>
            <div className="flex gap-[10px]">
                <EditOutlined className="cursor-pointer" />
                <DeleteOutlined
                    className="cursor-pointer"
                    onClick={showModal}
                />
            </div>
            <Modal
                width={400}
                title="Bạn chắc chắn muốn xóa"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            ></Modal>
        </div>
    );
}
