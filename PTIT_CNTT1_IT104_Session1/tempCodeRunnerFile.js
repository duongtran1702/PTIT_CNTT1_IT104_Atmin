class User {
    constructor(name, age = 18, role = 'user') {
        this.name = name;
        this.age = age;
        this.role = role;
        this.list = [];
    }
    createUser(name, age, role) {
        this.list.push(new User(name, age, role));
    }
}
const manage = new User();
manage.createUser("Dev");
console.log(manage.list[0]);
