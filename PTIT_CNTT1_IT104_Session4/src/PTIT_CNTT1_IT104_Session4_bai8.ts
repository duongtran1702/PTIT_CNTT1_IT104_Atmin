type Product1 = {
    readonly id: string;
    name: string;
    price: number;
};

type OrderItem1 = {
    product: Product1;
    quantity: number;
};

type Order1 = {
    orderId: string;
    customerName: string;
    items: OrderItem1[];
    note?: string;
};

const calculateOrderTotal = (order: Order1): number => {
    const { items } = order;
    let sum = 0;
    for (const item of items) {
        sum += item.quantity * item.product.price;
    }
    return sum;
};

const printOrder = (order: Order1): void => {
    console.log(`Đơn hàng: #${order.orderId}`);
    console.log(`Khách hàng: ${order.customerName}`);
    console.log('Sản phẩm:');

    for (const item of order.items) {
        const { name, price } = item.product;
        const { quantity } = item;
        const itemTotal = quantity * price;
        console.log(
            `- ${name} × ${quantity} → ${itemTotal.toLocaleString('vi-VN')} VND`
        );
    }

    const total = calculateOrderTotal(order);
    console.log(`Tổng cộng: ${total.toLocaleString('vi-VN')} VND`);

    if (order.note) {
        console.log(`Ghi chú: ${order.note}`);
    }
};

const aoSoMi: Product1 = { id: 'P01', name: 'Áo sơ mi', price: 250_000 };
const quanTay: Product1 = { id: 'P02', name: 'Quần tây', price: 400_000 };

const order: Order1 = {
    orderId: 'ORD001',
    customerName: 'Nguyễn Văn A',
    items: [
        { product: aoSoMi, quantity: 2 },
        { product: quanTay, quantity: 1 },
    ],
    note: 'Giao sau 18h',
};

printOrder(order);
