"use strict";
class Account {
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
var UserStatus;
(function (UserStatus) {
    UserStatus["ACTIVE"] = "active";
    UserStatus["INACTIVE"] = "inactive";
    UserStatus["BANNED"] = "banned";
})(UserStatus || (UserStatus = {}));
class UserAccount extends Account {
    constructor(id, userName, password, isLogin = true, role, status = UserStatus.ACTIVE) {
        super(id, userName, password, isLogin, role);
        this.status = status;
    }
    login() {
        if (this.status === UserStatus.ACTIVE) {
            console.log(`Log in successful`);
            this.isLogin = true;
        }
        else if (this.status === UserStatus.BANNED) {
            console.log(`The account locked`);
        }
    }
}
const user1 = new UserAccount('U001', 'Duong', '123456', false, 'admin', UserStatus.ACTIVE);
user1.login();
user1.logout();
const user2 = new UserAccount('U002', 'Toan', 'abcdef', false, 'user', UserStatus.BANNED);
user2.login();
