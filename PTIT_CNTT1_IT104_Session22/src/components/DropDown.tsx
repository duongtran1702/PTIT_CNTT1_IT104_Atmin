import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, type MenuProps } from 'antd';

export default function DropDown() {
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: 'Cài đặt',
        },
        {
            key: '2',
            label: 'Đổi mật khẩu',
        },
        {
            key: '3',
            label: 'Đăng xuất',
        },
    ];
    return (
        <div className="m-10">
            <Dropdown menu={{ items }} placement="bottomLeft" >
                <Button className='!flex !justify-center !items-center'>Nguyễn Văn Nam <DownOutlined /></Button>
            </Dropdown>
        </div>
    );
}
