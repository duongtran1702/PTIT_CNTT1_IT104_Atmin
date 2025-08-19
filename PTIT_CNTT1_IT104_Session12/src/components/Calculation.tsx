import { Component } from 'react';
import "../styles/Calculation.css"
export default class Calculation extends Component {
    // hàm cộng
    add(a: number, b: number): string {
        return `${a} + ${b} = ${a + b}`;
    }

    // hàm trừ
    subtract(a: number, b: number): string {
        return `${a} - ${b} = ${a - b}`;
    }

    // hàm nhân
    multiply(a: number, b: number): string {
        return `${a} * ${b} = ${a * b}`;
    }

    // hàm chia
    divide(a: number, b: number):| string {
        if (b === 0) {
            return 'Không thể chia cho 0';
        }
        return `${a} / ${b} = ${a / b}`;
    }

    render() {
        const a = 10;
        const b = 5;

        return (
            <ul>
                <h2>
                    Kết quả tính toán với a = {a}, b = {b}
                </h2>
                <li>Cộng: {this.add(a, b)}</li>
                <li>Trừ: {this.subtract(a, b)}</li>
                <li>Nhân: {this.multiply(a, b)}</li>
                <li>Chia: {this.divide(a, b)}</li>
            </ul>
        );
    }
}
