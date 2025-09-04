import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

export default function SpinnerTypes() {
    return (
        <div className="flex flex-col gap-5 items-center justify-center h-screen">
            <Spin indicator={<LoadingOutlined spin />} style={{color:'red'}}/>
            <Spin indicator={<LoadingOutlined spin />} size="large" />
            <Spin
                indicator={<LoadingOutlined style={{ fontSize: 48,color:'green' }} spin />}
            />
        </div>
    );
}
