import * as readlineSync from 'readline-sync';

// npm install readline-sync
// npm install --save-dev @types/readline-sync

class Customer {
    private static nextId: number = 1;
    public id: number;
    constructor(
        public name: string,
        public email: string,
        public shippingAddress: string
    ) {
        this.id = Customer.nextId++;
    }

    getDetails(): void {
        console.log(
            `ID: ${this.id} - Name: ${this.name} - Email: ${this.email} - Address: ${this.shippingAddress}`
        );
    }
}

abstract class Product {
    private static nextId: number = 1;
    public id: number;
    constructor(
        public name: string,
        public price: number,
        public stock: number
    ) {
        this.id = Product.nextId++;
    }

    sell(quantity: number): void {
        if (this.stock < quantity) {
            console.log('The quantity of product is not enough');
            return;
        }
        this.stock -= quantity;
    }

    restock(quantity: number): void {
        this.stock += quantity;
    }

    abstract getProductInfo(): string;
    abstract getShippingCost(distance: number): number;
    abstract getCategory(): string;
}

class ElectronicsProduct extends Product {
    constructor(
        name: string,
        price: number,
        stock: number,
        public warrantyPeriod: number
    ) {
        super(name, price, stock);
    }

    getShippingCost(distance: number = 1): number {
        return 50000 * distance;
    }

    getProductInfo(): string {
        return `ID: ${this.id} - Name: ${
            this.name
        }- Price: ${this.price.toLocaleString('vi')}VND - Stock: ${
            this.stock
        } - Warranty period: ${this.warrantyPeriod}`;
    }

    getCategory(): string {
        return `Electronic`;
    }
}

class ClothingProduct extends Product {
    constructor(
        name: string,
        price: number,
        stock: number,
        public size: string,
        public color: string
    ) {
        super(name, price, stock);
    }

    getShippingCost(distance: number = 1): number {
        return 25000 * distance;
    }

    getProductInfo(): string {
        return `ID: ${this.id} - Name: ${
            this.name
        }- Price: ${this.price.toLocaleString('vi')}VND - Stock: ${
            this.stock
        } - Size: ${this.size} - Color: ${this.color}`;
    }

    getCategory(): string {
        return `Clothing`;
    }
}

class TmpProduct {
    constructor(public product: Product, public quantity: number) {}
}

class Order {
    private static nextId = 1;
    public orderId: number;
    constructor(
        public customer: Customer,
        public products: TmpProduct[],
        public totalAmount: number
    ) {
        this.orderId = Order.nextId++;
    }

    getListProduct(): string {
        let result = '';
        this.products.forEach(
            (e) =>
                (result += `ID: ${e.product.id} - Name: ${
                    e.product.name
                } - Price: ${
                    e.product.price
                } - Category: ${e.product.getCategory()} - Quantity: ${
                    e.quantity
                }\n`)
        );
        return result;
    }

    getDetails(): string {
        return `ID: ${this.orderId}
            CusTomer:
            ID: ${this.customer.id} - Name: ${this.customer.name} - Email: ${
            this.customer.email
        }
        List product:\n ${this.getListProduct()}
        Total amount: ${this.products
            .reduce(
                (result, tmp) => result + tmp.product.price * tmp.quantity,
                0
            )
            .toLocaleString('vi-VN')}`;
    }
}

enum TypeProduct {
    Electronic = 'Electronic',
    Clothing = 'Clothing',
}

class Store {
    constructor(
        public products: Product[],
        public customers: Customer[],
        public orders: Order[]
    ) {}

    addProduct(type: TypeProduct): void {
        const name = readlineSync.question('Enter the product name: ');
        const price = readlineSync.questionFloat('Enter the product price: ');
        const stock = readlineSync.questionInt('Enter the product stock: ');
        if (type === TypeProduct.Electronic) {
            const warrantyPeriod = readlineSync.questionInt(
                'Enter the warranty period: '
            );
            this.products.push(
                new ElectronicsProduct(name, price, stock, warrantyPeriod)
            );
        }
        if (type === TypeProduct.Clothing) {
            const size = readlineSync.question('Enter the product size: ');
            const color = readlineSync.question('Enter the product color: ');
            this.products.push(
                new ClothingProduct(name, price, stock, size, color)
            );
        }
    }

    addCustomer(): void {
        const name = readlineSync.question('Enter the customer name: ');
        const email = readlineSync.question('Enter the customer email: ');
        const address = readlineSync.question('Enter the customer address: ');

        this.customers.push(new Customer(name, email, address));
    }

    createOrder(
        customerId: number,
        productQuantities: { productId: number; quantity: number }[]
    ): Order | null {
        const customer = this.customers.find((cus) => cus.id === customerId);
        const tmpProduct: TmpProduct[] = [];
        let total: number = 0;
        let newOder: Order | null = null;
        if (customer) {
            for (const product of productQuantities) {
                const tmp = this.products.find(
                    (e) => e.id === product.productId
                );

                if (tmp) {
                    if (product.quantity > tmp.stock) {
                        console.log('Quantity in stock is not enough');
                        continue;
                    }
                    tmp.stock -= product.quantity;
                    total += tmp.price * product.quantity;
                    tmpProduct.push(new TmpProduct(tmp, product.quantity));
                }
            }
            if (tmpProduct.length === 0) {
                console.log('No products found for this order.');
                return null;
            }
            newOder = new Order(customer, tmpProduct, total);
            this.orders.push(newOder);
        } else {
            return null;
        }

        return newOder;
    }

    cancelOrder(orderId: number): void {
        const orderIndex = this.orders.findIndex((o) => o.orderId === orderId);
        if (orderIndex === -1) {
            console.log(`Order with ID ${orderId} not found.`);
            return;
        }
        const order = this.orders[orderIndex];
        for (const tmpProd of order.products) {
            tmpProd.product.stock += tmpProd.quantity;
        }

        this.orders.splice(orderIndex, 1);

        console.log(`Order ${orderId} has been cancelled successfully.`);
    }

    listAvailableProducts(): void {
        const availableProducts = this.products.filter((p) => p.stock > 0);

        if (availableProducts.length === 0) {
            console.log('No products available in stock.');
            return;
        }

        console.log('Available products:');
        availableProducts.forEach((p) => {
            console.log(
                `ID: ${p.id} | Name: ${p.name} | Price: ${p.price} | Stock: ${p.stock}`
            );
        });
    }

    listCustomerOrders(customerId: number): void {
        const customerOrders = this.orders.filter(
            (o) => o.customer.id === customerId
        );

        if (customerOrders.length === 0) {
            console.log(`No orders found for customer ID ${customerId}.`);
            return;
        }

        console.log(`Orders for customer ID ${customerId}:`);
        customerOrders.forEach((o) => o.getDetails());
    }
    calculateTotalRevenue(): number {
        return this.orders.reduce(
            (total, order) => total + order.totalAmount,
            0
        );
    }
    countProductsByCategory(): void {
        const { clothing, electronic } = this.products.reduce(
            (counts, pro) => {
                if (pro.getCategory() === TypeProduct.Clothing)
                    counts.clothing++;
                if (pro.getCategory() === TypeProduct.Electronic)
                    counts.electronic++;
                return counts;
            },
            { clothing: 0, electronic: 0 }
        );

        console.log(`Clothing product: ${clothing}`);
        console.log(`Electronic product: ${electronic}`);
    }

    updateProductStock(productId: number, newStock: number): void {
        const index = this.products.findIndex((p) => p.id === productId);

        if (index === -1) {
            console.log(`Product with ID ${productId} not found`);
            return;
        }

        this.products[index].stock = newStock;
        console.log(`Updated stock for product ID ${productId} to ${newStock}`);
    }

    findEntityById<T extends { id: number }>(
        collection: T[],
        id: number
    ): T | undefined {
        return collection.find((item) => (item.id === id));
    }
}
// ==== TEST SCRIPT ====
const customer1 = new Customer("Nguyen Van A", "a@example.com", "Hanoi");
const customer2 = new Customer("Tran Thi B", "b@example.com", "HCM");

const product1 = new ElectronicsProduct("Laptop", 20000000, 5, 24);
const product2 = new ElectronicsProduct("Phone", 10000000, 3, 12);
const product3 = new ClothingProduct("T-Shirt", 200000, 10, "M", "Red");
const product4 = new ClothingProduct("Jeans", 500000, 4, "L", "Blue");

const store = new Store(
    [product1, product2, product3, product4],
    [customer1, customer2],
    []
);

console.log("===== Test listAvailableProducts =====");
store.listAvailableProducts();

console.log("\n===== Test createOrder =====");
const order1 = store.createOrder(customer1.id, [
    { productId: product1.id, quantity: 1 },
    { productId: product3.id, quantity: 2 }
]);
console.log(order1?.getDetails());

const order2 = store.createOrder(customer2.id, [
    { productId: product2.id, quantity: 1 },
    { productId: product4.id, quantity: 1 }
]);
console.log(order2?.getDetails());

console.log("\n===== Test listCustomerOrders =====");
store.listCustomerOrders(customer1.id);

console.log("\n===== Test calculateTotalRevenue =====");
console.log("Total revenue:", store.calculateTotalRevenue().toLocaleString("vi-VN"), "VND");

console.log("\n===== Test countProductsByCategory =====");
store.countProductsByCategory();

console.log("\n===== Test updateProductStock =====");
store.updateProductStock(product1.id, 99);
store.listAvailableProducts();

console.log("\n===== Test cancelOrder =====");
if (order1) {
    store.cancelOrder(order1.orderId);
    store.listCustomerOrders(customer1.id);
    store.listAvailableProducts();
}

console.log("\n===== Test findEntityById =====");
const foundProduct = store.findEntityById(store.products, product2.id);
console.log("Found product:", foundProduct?.name);

const foundCustomer = store.findEntityById(store.customers, customer2.id);
console.log("Found customer:", foundCustomer?.name);
// const newOreder=store.createOrder();