import { Outlet } from 'react-router-dom';

export default function Bai2() {
    return (
        <div>
            <header
                style={{
                    display: 'flex',
                    backgroundColor: '#007BFF',
                    padding: 10,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    borderRadius: 2,
                }}
            >
                <h1>Trang chi tiết sản phẩm</h1>
                <div>Danh sách sản phẩm</div>
            </header>
            <Outlet />
        </div>
    );
}
