abstract class Account {
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

enum UserStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    BANNED = 'banned',
}

class UserAccount extends Account {
    constructor(
        id: string,
        userName: string,
        password: string,
        isLogin: boolean = true,
        role: string,
        public status: UserStatus = UserStatus.ACTIVE
    ) {
        super(id, userName, password, isLogin, role);
    }
    login(): void {
        if (this.status === UserStatus.ACTIVE) {
            console.log(`Log in successful`);
            this.isLogin = true;
        } else if (this.status === UserStatus.BANNED) {
            console.log(`The account locked`);
        }
    }
}

const user1 = new UserAccount(
    'U001',
    'Duong',
    '123456',
    false,
    'admin',
    UserStatus.ACTIVE
);
user1.login();
user1.logout();

const user2 = new UserAccount(
    'U002',
    'Toan',
    'abcdef',
    false,
    'user',
    UserStatus.BANNED
);
user2.login();
