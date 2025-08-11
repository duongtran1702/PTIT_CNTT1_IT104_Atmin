class Book {
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

class LendedBook {
    memberId: string;
    bookId: string;
    dueDate: Date;

    constructor(memberId: string, bookId: string, dueDate: Date) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}

class Member {
    id: string;
    name: string;
    contact: string;
    lendedBooks: LendedBook[];
    status: string;

    constructor(id: string, name: string, contact: string, status: string) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.status = status;
        this.lendedBooks = [];
    }
}

class Library {
    books: Book[];
    members: Member[];

    constructor() {
        this.books = [];
        this.members = [];
    }

    addBook(book: Book): void {
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
                `ID: ${book.id} | Title: ${book.title} | Author: ${book.author} | Stock: ${book.stock} | Status: ${book.status}`
            );
        });
    }
}

// Demo sử dụng

const library = new Library();

const book1 = new Book('B1', 'Clean Code', 'Robert C. Martin', 5, 'available');
const book2 = new Book(
    'B2',
    'The Pragmatic Programmer',
    'Andrew Hunt',
    3,
    'available'
);
const book3 = new Book('B3', 'Design Patterns', 'Erich Gamma', 2, 'borrowed');

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.showBooks();
