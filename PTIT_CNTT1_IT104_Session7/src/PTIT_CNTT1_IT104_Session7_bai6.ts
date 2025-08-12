abstract class Account2 {
    constructor(
        public id: string,
        public userName: string,
        public password: string,
        public isLogin: boolean = true,
        public role: string
    ) {}
    logout(): void {
        if (this.isLogin) {
            console.log(`Log out successful`);
            this.isLogin = false;
        }
    }
    abstract login(): void;
}

enum UserStatus2 {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    BANNED = 'banned',
}

class UserAccount2 extends Account2 {
    constructor(
        id: string,
        userName: string,
        password: string,
        isLogin: boolean = true,
        role: string = 'user',
        public status: UserStatus2 = UserStatus2.ACTIVE
    ) {
        super(id, userName, password, isLogin, role);
    }
    login(): void {
        if (this.status === UserStatus2.ACTIVE) {
            console.log(`Log in successful`);
            this.isLogin = true;
        } else if (this.status === UserStatus2.BANNED) {
            console.log(`The account locked`);
        }
    }
}

class AdminAccount extends Account2 {
    constructor(
        id: string,
        userName: string,
        password: string,
        isLogin: boolean = true,
        role: string = 'admin',
        public users: UserAccount2[]
    ) {
        super(id, userName, password, isLogin, role);
    }

    login(): void {
        console.log(`Admin login successful`);
        this.isLogin = true;
    }

    banUser(id: string): void {
        const tmp = this.users.find((user) => user.id === id);
        if (tmp) {
            tmp.status = UserStatus2.BANNED;
            console.log(`User ${tmp.userName} has been banned.`);
        } else {
            console.log(`User with id "${id}" not found.`);
        }
    }
}

const user01 = new UserAccount2('user1', 'Alice', 'pass1');
const user02 = new UserAccount2('user2', 'Bob', 'pass2');
const admin = new AdminAccount(
    'admin1',
    'SuperAdmin',
    'adminpass',
    true,
    'admin',
    [user01, user02]
);

user01.login(); 
admin.banUser('user1'); 
user01.login();
