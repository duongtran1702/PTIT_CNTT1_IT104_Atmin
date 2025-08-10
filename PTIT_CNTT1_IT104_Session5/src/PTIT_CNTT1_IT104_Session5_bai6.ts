// import promptSync from 'prompt-sync';
// const prompt = promptSync();

// const a = Number(prompt('Nhập số a: '));
// const b = Number(prompt('Nhập số b: '));

// console.log(`${a} + ${b} = ${a + b}`);

class Book {
    private title: string;
    private author: string;
    constructor(title: string, author: string) {
        this.author = author;
        this.title = title;
    }
    getTitle(): string {
        return this.title;
    }
    getAuthor(): string {
        return this.author;
    }
}

class Library {
    books: Book[] = [];
    addBook(book: Book): void {
        this.books.push(book);
    }
    showBooks(): void {
        this.books.forEach((book, index) => {
            console.log(
                `Sách ${index + 1}: ${book.getTitle()} - ${book.getAuthor()}`
            );
        });
    }
}
const library = new Library();
library.addBook(new Book('Harry Potter', 'J.K. Rowling'));
library.addBook(new Book('Nhà Giả Kim', 'Paulo Coelho'));
library.addBook(new Book('Lão Hạc', 'Nam Cao'));
library.showBooks();
