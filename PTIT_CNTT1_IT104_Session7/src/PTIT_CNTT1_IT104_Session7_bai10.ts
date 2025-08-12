class MenuItem {
    constructor(public id: string, public name: string, public price: number) {}
}

class Table {
    constructor(
        public id: string,
        public capacity: number,
        public available: boolean
    ) {}
}

class Reservation {
    constructor(
        public id: string,
        public customerName: string,
        public tableId: string
    ) {}
}

class Order {
    constructor(
        public id: string,
        public items: MenuItem[],
        public tableId: string
    ) {}

    getTotal(): number {
        const total = this.items.reduce((sum, e) => sum + e.price, 0);
        return total;
    }
}

class Restaurant {
    constructor(
        public menu: MenuItem[],
        public tables: Table[],
        public reservations: Reservation[],
        public orders: Order[]
    ) {}

    addMenuItem(item: MenuItem): void {
        if (!this.menu.includes(item)) this.menu.push(item);
    }

    addTable(table: Table): void {
        const tmp = this.tables.find((e) => e.id === table.id);
        if (!tmp) this.tables.push(table);
    }

    makeReservation(customerName: string, tableId: string): void {
        const tmp = this.tables.find((e) => e.id === tableId);
        if (!tmp) {
            console.log('A table with the specified ID does not exist.');
            return;
        }
        if (!tmp.available) {
            console.log('The table with the given ID is already reserved.');
            return;
        }
        tmp.available = false;
        const id = `A-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
        this.reservations.push(new Reservation(id, customerName, tableId));
    }

    placeOrder(tableId: string, items: MenuItem[]): void {
        const id = `A-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
        const table = this.tables.find((e) => e.id === tableId);
        if (table) this.orders.push(new Order(id, items, tableId));
    }

    generateBill(tableId: string): number {
        const order = this.orders.find((e) => e.tableId === tableId);
        const table = this.tables.find((e) => e.id === tableId);

        if (!order) {
            console.log('No order found for the specified table.');
            return 0;
        }

        if (!table) {
            console.log('Table with the specified ID does not exist.');
            return 0;
        }

        if (table) table.available = true;
        return order.getTotal();
    }
}

// Tạo các món ăn
const pizza = new MenuItem('M1', 'Pizza', 120);
const burger = new MenuItem('M2', 'Burger', 80);
const salad = new MenuItem('M3', 'Salad', 50);

// Tạo nhà hàng
const restaurant = new Restaurant([], [], [], []);

// Thêm món ăn vào menu
restaurant.addMenuItem(pizza);
restaurant.addMenuItem(burger);
restaurant.addMenuItem(salad);

// Thêm bàn vào nhà hàng
const table1 = new Table('T1', 4, true);
const table2 = new Table('T2', 2, true);
restaurant.addTable(table1);
restaurant.addTable(table2);

// Đặt bàn
restaurant.makeReservation('Alice', 'T1');
restaurant.makeReservation('Bob', 'T2');

// Thử đặt bàn đã đặt
restaurant.makeReservation('Charlie', 'T1'); // Báo bàn đã đặt

// Đặt món cho bàn T1
restaurant.placeOrder('T1', [pizza, salad]);
// Đặt món cho bàn T2
restaurant.placeOrder('T2', [burger]);

// In hóa đơn cho bàn T1
const bill1 = restaurant.generateBill('T1'); // Tổng 170
console.log(`Bill for table T1: ${bill1}`);

// In hóa đơn cho bàn T2
const bill2 = restaurant.generateBill('T2'); // Tổng 80
console.log(`Bill for table T2: ${bill2}`);

// Đặt lại bàn T1 sau thanh toán
restaurant.makeReservation('David', 'T1'); // Thành công vì bàn T1 đã trống

// Kiểm tra trạng thái bàn
console.log(`Table T1 available: ${table1.available}`); // false
console.log(`Table T2 available: ${table2.available}`); // true
