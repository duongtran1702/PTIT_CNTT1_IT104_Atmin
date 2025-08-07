type Product2 = {
    readonly id: string;
    name: string;
    price: number;
};

type OrderItem = {
    product: Product2; //
    quantity: number;
    note?: string;
};

type Order = {
    orderId: string;
    customerName: string;
    items: OrderItem[]; //
    deliveryAddress: string;
    isPaid: boolean;
};

type Invoice = {
    invoiceId: string;
    orders: Order[]; //
    createdAt: Date;
};

const calculateInvoiceTotal = (invoice: Invoice): number => {
    const { orders } = invoice;
    let sum = 0;
    for (const tmp of orders) {
        for (const tmp2 of tmp.items) {
            sum += tmp2.product.price * tmp2.quantity;
        }
    }
    return sum;
};

const getUnpaidOrders = (invoice: Invoice): Order[] => {
    const tmp = invoice.orders.filter((order) => !order.isPaid);
    return tmp;
};

const printInvoice = (invoice: Invoice): void => {
    console.log(
        `HÓA ĐƠN: #${invoice.invoiceId} - Ngày tạo: ${invoice.createdAt
            .toISOString()
            .slice(0, 10)}`
    );
    console.log('------------------------------\n');

    for (const order of invoice.orders) {
        console.log(`ĐƠN HÀNG: #${order.orderId} - ${order.customerName}`);

        for (const item of order.items) {
            const { name, price } = item.product;
            const quantity = item.quantity;
            const noteText = item.note ? ` (note: ${item.note})` : '';
            const itemTotal = price * quantity;
            console.log(
                `- ${name} x ${quantity} → ${itemTotal.toLocaleString(
                    'vi-VN'
                )} VND${noteText}\n`
            );
        }

        const orderTotal = order.items.reduce(
            (sum, item) => sum + item.product.price * item.quantity,
            0
        );
        console.log(`Tổng đơn: ${orderTotal.toLocaleString('vi-VN')} VND`);
        console.log(
            `\nTrạng thái: ${
                order.isPaid ? 'ĐÃ THANH TOÁN' : 'CHƯA THANH TOÁN'
            }\n`
        );
    }

    const invoiceTotal = calculateInvoiceTotal(invoice);
    console.log(
        `>> Tổng cộng hóa đơn: ${invoiceTotal.toLocaleString('vi-VN')} VND`
    );
};

const invoice: Invoice = {
    invoiceId: 'INV001',
    createdAt: new Date('2024-05-14'),
    orders: [
        {
            orderId: 'ORD001',
            customerName: 'Nguyễn Văn A',
            deliveryAddress: 'Hà Nội',
            isPaid: true,
            items: [
                {
                    product: { id: 'P001', name: 'Áo sơ mi', price: 250000 },
                    quantity: 2,
                },
                {
                    product: { id: 'P002', name: 'Quần jean', price: 400000 },
                    quantity: 1,
                },
            ],
        },
        {
            orderId: 'ORD002',
            customerName: 'Trần Thị B',
            deliveryAddress: 'TP. HCM',
            isPaid: false,
            items: [
                {
                    product: { id: 'P003', name: 'Váy hoa', price: 700000 },
                    quantity: 1,
                    note: 'size M',
                },
            ],
        },
    ],
};

// Gọi hàm test
printInvoice(invoice);
