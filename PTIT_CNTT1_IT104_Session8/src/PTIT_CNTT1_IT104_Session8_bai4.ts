const merge = <T, U>(a: T, b: U): T & U => {
    return { ...a, ...b };
};
const obj1 = { name: 'Dương', class: 'CNTT1' };
const obj2 = { age: 18 };

const result = merge(obj1, obj2);
console.log(result);
