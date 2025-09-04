import { Alert } from 'antd';

export default function AlertTypes() {
    return (
        <div className="!w-100 flex flex-col gap-3 m-5">
            <Alert
                description="Tên không được để trống"
                type="warning"
                closable
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '10px 20px',
                }}
            />
            <Alert
                description="Thêm tài khoản thất bại"
                type="error"
                closable
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '10px 20px',
                }}
            />
            <Alert
                description="Thêm tài khoản thành công"
                type="success"
                closable
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '10px 20px',
                }}
            />
        </div>
    );
}
