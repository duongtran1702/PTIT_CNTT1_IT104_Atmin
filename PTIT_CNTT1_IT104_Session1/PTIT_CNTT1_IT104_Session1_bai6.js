class User {
    constructor(name, age = 18, role = 'user') {
        this.name = name;
        this.age = age;
        this.role = role;
    }
}

class UserManager {
    constructor() {
        this.list = [];
    }

    createUser(name, age, role) {
        this.list.push(new User(name, age, role));
    }
}

const manage = new UserManager();
manage.createUser('Dev');
manage.createUser('Admin', 20, 'admin');

console.log(manage.list[0]);
console.log(manage.list[1]);
