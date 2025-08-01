class Person {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
    xinchao() {
        console.log(`Xin chào, Tôi tên là ${this.name}, ${this.age} tuổi`);
    }
}
const tmp = new Person('Atmin', 21);
tmp.xinchao();
