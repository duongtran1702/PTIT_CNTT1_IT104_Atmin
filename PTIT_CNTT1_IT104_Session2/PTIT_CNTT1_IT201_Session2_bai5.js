class PhoneBook {
    constructor(name, phone, email) {
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
}

class Manage {
    constructor() {
        this.phoneBooks = [];
    }
    addContact(name, phone, email) {
        this.phoneBooks.push(new PhoneBook(name, phone, email));
    }
    displayContact() {
        this.phoneBooks.forEach((tmp) =>
            console.log(`${tmp.name} - ${tmp.phone} - ${tmp.email}`)
        );
    }
}

const manage = new Manage();

manage.addContact('admin', '0822817206', 'admin@gmail.com');
manage.addContact('atmin', '0822817207', 'atmin@gmail.com');
manage.addContact('mynato', '0822817208', 'mynato@gmail.com');

manage.displayContact();
