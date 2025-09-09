import { FileDoneOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';

interface PropTypeHeader {
    onAdd: (title: string) => void;
}

export default function Header({ onAdd }: PropTypeHeader) {
    const [content, setContent] = useState<string>('');
    const [showError, setShowError] = useState<boolean>(false);
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setContent(e.target.value);
    };
    useEffect(() => {
        if (content === '') setShowError(true);
        else setShowError(false);
    },[content]);
    const addContent = () => {
        onAdd(content);
        setContent('');
    };
    return (
        <div
            className="bg-[#FFC53D] w-[400px] p-4 flex justify-center flex-col h-fit"
            style={{
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                boxSizing: 'border-box',
            }}
        >
            <div className="flex justify-between items-center">
                <h1>STICKY NOTE</h1>
                <FileDoneOutlined onClick={addContent} />
            </div>
            {/* input text area */}
            <div className="flex justify-center ">
                <textarea
                    value={content}
                    onChange={handleChange}
                    className="h-20 bg-[#333333] w-[360px] rounded-[8px] resize-none outline-none text-white p-[5px]"
                ></textarea>
            </div>
            {showError && (
                <div className="text-note">
                    Nội dung ghi chú không được trống
                </div>
            )}
        </div>
    );
}
