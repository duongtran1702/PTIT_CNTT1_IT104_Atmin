import { Input } from 'antd';

export default function InputTypes() {
    return (
        <div className='m-10 w-50'>
            <Input size="large" placeholder="Input cỡ lớn" />
            <br />
            <br />
            <Input placeholder="Input cỡ trung bình" />
            <br />
            <br />
            <Input size="small" placeholder="Input cỡ nhỏ" />
        </div>
    );
}
