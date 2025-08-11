"use strict";
// // abstract class User {
// //     getName(): void {
// //         console.log('Name');
// //     }
// //     abstract run():void;
// //     abstract study():void;
// // }
// // class Employee extends User {
// //     run(): void {
// //         throw new Error("Method not implemented.");
// //     }
// //     study(): void {
// //         throw new Error("Method not implemented.");
// //     }
// //     //Override
// //     getName(): void {
// //         console.log('Employee name');
// //     }
// // }
// // interface Animal {
// //     name: string;
// //     makeSound(): void;
// // }
// // class Dog implements Animal {
// //     name: string;
// //     constructor(name: string) {
// //         this.name = name;
// //     }
// //     makeSound(): void {
// //         console.log("Meow meow");
// //     }
// // }
// // const tmp = new Dog("Mèo");
// // tmp.makeSound();
// interface Animal {
//     name: string;
//     age: number;
//     category: string;
//     sound(): string;
//     getDetail(): string;
//     move(): void;
//     feed(): void;
// }
// abstract class Animal implements Animal {
//     name: string;
//     age: number;
//     category: string;
//     footType: string;
//     constructor(name: string, age: number, category: string, footType: string) {
//         this.age = age;
//         this.name = name;
//         this.category = category;
//         this.footType = footType;
//     }
//     getDetail(): string {
//         return `Name: ${this.name} - Age: ${this.age} - Category: ${this.category} - Foot Type: ${this.footType}`;
//     }
//     // abstract sound(): string;
//     // abstract move(): void;
//     // abstract feed(): void {
//     //     console.log(`Name: ${this.name} eating ${this.footType}`);
//     // }
// }
// class Mammal extends Animal {
//     furColor: string;
//     constructor(
//         name: string,
//         age: number,
//         category: string,
//         footType: string,
//         furColor: string
//     ) {
//         super(name, age, category, footType);
//         this.furColor = furColor;
//     }
//     move(): void {
//         console.log(`Phạch phạch`);
//     }
//     sound(): string {
//         return ``
//     }
// }
// class Bird extends Animal {
//     wingSpan: number;
//     constructor(
//         name: string,
//         age: number,
//         category: string,
//         footType: string,
//         wingSpan: number
//     ) {
//         super(name, age, category, footType);
//         this.wingSpan = wingSpan;
//     }
//     move(): void {
//         console.log('Flying ....');
//     }
// }
// class RepTile extends Animal {
//     vennomous: boolean;
//     constructor(
//         name: string,
//         age: number,
//         category: string,
//         footType: string,
//         vennomous: boolean
//     ) {
//         super(name, age, category, footType);
//         this.vennomous = vennomous;
//     }
//     move(): void {
//         console.log('Đang bò ...');
//     }
// }
// const animal: Animal[] = [
//     new Mammal('Lion', 5, 'Mammal', '4 chân', 'Vàng'),
//     new Bird('Eagle', 3, 'Bird', '2 chân', 2.5),
//     new RepTile('Snake', 2, 'Reptile', '0 chân', true),
//     new Mammal('Dog', 4, 'Mammal', '4 chân', 'Nâu'),
//     new Bird('Parrot', 1, 'Bird', '2 chân', 0.5),
//     new RepTile('Lizard', 1, 'Reptile', '4 chân', false),
// ];
