// product.data.ts

export interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
}

export const products: Product[] = [
    {
        id: 1,
        name: 'Laptop Dell XPS 13',
        image: 'https://cohotech.vn/wp-content/uploads/2023/09/Dell-XPS-13-9380-i7-8565u-01.jpg',
        price: 35000000,
        quantity: 10,
    },
    {
        id: 2,
        name: 'Apple iPhone 14',
        image: 'https://cdn2.fptshop.com.vn/unsafe/828x0/filters:format(webp):quality(75)/2022_10_28_638025679601117545_iPhone%2014%20(8).jpg',
        price: 25000000,
        quantity: 15,
    },
    {
        id: 3,
        name: 'Samsung Galaxy S23',
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-s23-ulatra_1__1.png',
        price: 22000000,
        quantity: 12,
    },
    {
        id: 4,
        name: 'Sony WH-1000XM5',
        image: 'https://www.sony.com.vn/image/6145c1d32e6ac8e63a46c912dc33c5bb?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF',
        price: 8000000,
        quantity: 20,
    },
    {
        id: 5,
        name: 'Apple MacBook Air M2',
        image: 'https://cdn2.fptshop.com.vn/unsafe/macbook_air_13_m2_midnight_1_35053fbcf9.png',
        price: 40000000,
        quantity: 8,
    },
    {
        id: 6,
        name: 'Logitech MX Master 3',
        image: 'https://nvs.tn-cdn.net/2023/02/chuot-logitech-mx-master-3s-for-mac.jpg',
        price: 2500000,
        quantity: 25,
    },
    {
        id: 7,
        name: 'iPad Pro 11 inch',
        image: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/i/p/ipad-pro-11-2021-1_13.jpg',
        price: 20000000,
        quantity: 10,
    },
    {
        id: 8,
        name: 'Samsung Galaxy Tab S8',
        image: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/t/a/tab_s8_2_2_2_3.jpg',
        price: 18000000,
        quantity: 12,
    },
    {
        id: 9,
        name: 'Nintendo Switch OLED',
        image: 'https://www.droidshop.vn/wp-content/uploads/2022/12/May-Nintendo-Switch-Oled-kem-qua-tang.jpg',
        price: 10000000,
        quantity: 7,
    },
    {
        id: 10,
        name: 'Canon EOS R6',
        image: 'https://product.hstatic.net/1000234350/product/20240109_akvp4u7s0j_fb05d21fa2fe4564bda1c86f20d06293_1024x1024.jpeg',
        price: 60000000,
        quantity: 5,
    },
];
