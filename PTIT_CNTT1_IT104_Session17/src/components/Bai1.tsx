import { useState } from 'react';

export default function Bai1() {
    const [name] = useState<string>('Admin');

    return <div>Họ và tên : {name}</div>;
}
