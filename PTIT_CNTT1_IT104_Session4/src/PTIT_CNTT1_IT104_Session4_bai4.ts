const handleUnionType = (input: string | number): string => {
    if (typeof input === 'string') return `${input.length}`;
    if (typeof input === 'number') {
        if (input % 2 === 0) return `Đây là số chẵn`;
    }
    return `Đây là số lẻ`;
};
console.log(handleUnionType("demo123"));
console.log(handleUnionType(10));
