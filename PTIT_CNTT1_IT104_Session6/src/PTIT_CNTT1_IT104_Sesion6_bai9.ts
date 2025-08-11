class Book1 {
    id: string;
    title: string;
    author: string;
    stock: number;
    status: string;

    constructor(
        id: string,
        title: string,
        author: string,
        stock: number,
        status: string
    ) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}

class Member1 {
    id: string;
    name: string;
    contact: string;
    lendedBooks: LendedBook1[];
    status: string;

    constructor(
        id: string,
        name: string,
        contact: string,
        status: string = 'active'
    ) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.status = status;
        this.lendedBooks = [];
    }
}

class LendedBook1 {
    memberId: string;
    bookId: string;
    dueDate: Date;

    constructor(memberId: string, bookId: string, dueDate: Date) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}

class Library1 {
    books: Book1[];
    members: Member1[];

    constructor() {
        this.books = [];
        this.members = [];
    }
    //Book
    addBook(book: Book1): void {
        this.books.push(book);
        console.log(`Added book: ${book.title}`);
    }

    showBooks(): void {
        if (this.books.length === 0) {
            console.log('Library has no books.');
            return;
        }
        console.log('Books in library:');
        this.books.forEach((book) => {
            console.log(
                `ID: ${book.id} - Title: ${book.title} - Author: ${book.author} - Stock: ${book.stock} - Status: ${book.status}`
            );
        });
    }
    //Member
    registerMember(id: string, name: string, contact: string): void {
        const exists = this.members.some((m) => m.id === id);
        if (exists) {
            console.log(`Member with ID ${id} already exists.`);
            return;
        }
        const newMember = new Member1(id, name, contact);
        this.members.push(newMember);
        console.log(`Registered new member: ${name} (ID: ${id})`);
    }

    blockMember(id: string): void {
        const member = this.members.find((m) => m.id === id);
        if (!member) {
            console.log(`Member with ID ${id} not found.`);
            return;
        }
        member.status = 'blocked';
        console.log(`Member ${member.name} (ID: ${id}) has been blocked.`);
    }

    showMembers(): void {
        if (this.members.length === 0) {
            console.log('No members in the library.');
            return;
        }
        console.log('Library members:');
        this.members.forEach((m) => {
            console.log(
                `ID: ${m.id} - Name: ${m.name} - Contact: ${m.contact} - Status: ${m.status}`
            );
        });
    }
}

const library1 = new Library1();

library1.addBook(
    new Book1('B1', 'Clean Code', 'Robert C. Martin', 5, 'available')
);
library1.addBook(
    new Book1('B2', 'The Pragmatic Programmer', 'Andrew Hunt', 3, 'available')
);

library1.registerMember('M1', 'Nguyen Van A', 'nguyenvana@email.com');
library1.registerMember('M2', 'Tran Thi B', 'tranthib@email.com');

library1.showMembers();

library1.blockMember('M1');

library1.showMembers();
