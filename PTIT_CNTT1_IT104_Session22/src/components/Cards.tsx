import { Button, Card } from 'antd';
import Meta from 'antd/es/card/Meta';

export default function Cards() {
    return (
        <div className="m-10 flex gap-[20px]">
            <Card
                hoverable
                style={{ width: 240 }}
                cover={
                    <img
                        alt="example"
                        src="https://cdn.tgdd.vn/Products/Images/44/197305/apple-macbook-air-mree2sa-a-i5-8gb-128gb-133-gold-7-2-600x600.jpg"
                        className="!h-40 object-cover "
                    />
                }
            >
                <Meta
                    title="MacBook Air 2018"
                    description="The reason I am selling the machine is because it is too much power for what I need."
                />
                <div
                    style={{
                        marginTop: 10,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Button type="primary">Xem chi tiết</Button>
                    <span>30.000.000 đ</span>
                </div>
            </Card>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={
                    <img
                        alt="MacBook Pro 2019"
                        src="https://bizweb.dktcdn.net/thumb/1024x1024/100/347/092/products/apple-macbook-pro-2019-core-i5-8gb-256gb-1-jpeg.jpg?v=1683487321783"
                        className="!h-40 object-cover "
                    />
                }
            >
                <Meta
                    title="MacBook Pro 2019"
                    description="The reason I am selling the machine is because it is too much power for what I need."
                />
                <div
                    style={{
                        marginTop: 10,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Button type="primary">Xem chi tiết</Button>
                    <span>30.000.000 đ</span>
                </div>
            </Card>
        </div>
    );
}
