const products = [
    { name: 'A', price: 100, discount: 0.1, quantity: 2 },
    {
        name: 'B',
        price: 200,
        discount: 0.2,
        quantity: 1,
        bulkDiscount: { minQuantity: 2, extraDiscount: 0.05 },
    },
    {
        name: 'C',
        price: 300,
        discount: 0,
        quantity: 3,
        bulkDiscount: { minQuantity: 3, extraDiscount: 0.1 },
    },
];

const getOrderSummary = (products) => {
    let totalBeforeDiscount = 0;
    let totalAfterDiscount = 0;
    const details = [];

    for (const product of products) {
        totalBeforeDiscount += product.price * product.quantity;

        let finalPrice = product.price * (1 - product.discount);

        if (
            product.bulkDiscount &&
            product.quantity >= product.bulkDiscount.minQuantity
        ) {
            finalPrice *= 1 - product.bulkDiscount.extraDiscount;
        }

        finalPrice = Math.round(finalPrice);
        const subtotal = finalPrice * product.quantity;
        totalAfterDiscount += subtotal;

        details.push({
            name: product.name,
            finalPrice,
            quantity: product.quantity,
            subtotal,
        });
    }

    return {
        totalBeforeDiscount,
        totalAfterDiscount,
        details,
    };
};

console.log(getOrderSummary(products));
