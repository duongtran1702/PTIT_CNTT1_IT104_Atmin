type Product = {
    id: string;
    name: string;
    price: number;
    category: {
        id: string;
        name: string;
    };
    discount?: number;
};

const listProduct: Product[] = [
    {
        id: 'p001',
        name: 'Laptop ASUS Zenbook',
        price: 250000,
        category: {
            id: 'c001',
            name: 'Electronics',
        },
        discount: 0.15,
    },
    {
        id: 'p002',
        name: 'Gaming Mouse Logitech G502',
        price: 80000,
        category: {
            id: 'c002',
            name: 'Accessories',
        },
    },
    {
        id: 'p003',
        name: 'JavaScript for Beginners',
        price: 30000,
        category: {
            id: 'c003',
            name: 'Books',
        },
        discount: 0.05,
    },
];

const getFinalPrice = (product: Product): number => {
    if (product.discount) return product.price * (1 - product.discount);
    return product.price;
};

const printProductInfo = (product: Product) => {
    console.log(`Name: ${product.name}`);
    console.log(`Original Price: ${product.price} VND`);
    console.log(`Discounted Price: ${getFinalPrice(product)} VND`);
    console.log(`Category: ${product.category.name}`);
    console.log('');
};

listProduct.forEach((tmp) => printProductInfo(tmp));
