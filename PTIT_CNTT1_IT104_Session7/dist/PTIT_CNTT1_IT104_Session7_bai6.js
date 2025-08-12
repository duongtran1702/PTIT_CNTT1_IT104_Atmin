"use strict";
class Account2 {
    constructor(id, userName, password, isLogin = true, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }
    logout() {
        if (this.isLogin) {
            console.log(`Log out successful`);
            this.isLogin = false;
        }
    }
}
var UserStatus2;
(function (UserStatus2) {
    UserStatus2["ACTIVE"] = "active";
    UserStatus2["INACTIVE"] = "inactive";
    UserStatus2["BANNED"] = "banned";
})(UserStatus2 || (UserStatus2 = {}));
class UserAccount2 extends Account2 {
    constructor(id, userName, password, isLogin = true, role = 'user', status = UserStatus2.ACTIVE) {
        super(id, userName, password, isLogin, role);
        this.status = status;
    }
    login() {
        if (this.status === UserStatus2.ACTIVE) {
            console.log(`Log in successful`);
            this.isLogin = true;
        }
        else if (this.status === UserStatus2.BANNED) {
            console.log(`The account locked`);
        }
    }
}
class AdminAccount extends Account2 {
    constructor(id, userName, password, isLogin = true, role = 'admin', users) {
        super(id, userName, password, isLogin, role);
        this.users = users;
    }
    login() {
        console.log(`Admin login successful`);
        this.isLogin = true;
    }
    banUser(id) {
        const tmp = this.users.find((user) => user.id === id);
        if (tmp) {
            tmp.status = UserStatus2.BANNED;
            console.log(`User ${tmp.userName} has been banned.`);
        }
        else {
            console.log(`User with id "${id}" not found.`);
        }
    }
}
const user01 = new UserAccount2('user1', 'Alice', 'pass1');
const user02 = new UserAccount2('user2', 'Bob', 'pass2');
const admin = new AdminAccount('admin1', 'SuperAdmin', 'adminpass', true, 'admin', [user01, user02]);
user01.login();
admin.banUser('user1');
user01.login();
