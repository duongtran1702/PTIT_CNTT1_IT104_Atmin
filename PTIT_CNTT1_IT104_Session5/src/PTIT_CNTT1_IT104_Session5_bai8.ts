import promptSync from 'prompt-sync';
const prompt = promptSync();

class Book2 {
    private title: string;
    private author: string;
    private id: string;
    constructor(title: string, author: string, id: string) {
        this.author = author;
        this.title = title;
        this.id = id;
    }
    getTitle(): string {
        return this.title;
    }
    getAuthor(): string {
        return this.author;
    }
    getId(): string {
        return this.id;
    }
}

class Library2 {
    books: Book2[] = [];
    addBook(book: Book2): void {
        this.books.push(book);
    }
    showBooks(): void {
        this.books.forEach((book, index) => {
            console.log(
                `Sách ${index + 1}: ${book.getTitle()} - ${
                    book.getAuthor() + ' - ID: ' + book.getId()
                }`
            );
        });
    }
    updateBook(idx: string): void {
        const tmp = this.books.findIndex((book) => book.getId() === idx);
        if (tmp !== -1) {
            const title = prompt('Nhập tên sách mới: ');
            const author = prompt('Nhập tác giả mới: ');
            this.books[tmp] = new Book2(title, author, idx);
        }
    }
    searchBook(idx: string): string {
        const book = this.books.find(
            (book) => book.getId().toLowerCase() === idx.toLowerCase()
        );
        if (book) {
            return `Sách tìm thấy: ${book.getTitle()} - ${book.getAuthor()} - ID: ${book.getId()}`;
        } else {
            return 'Không tìm thấy sách';
        }
    }
}
const library1 = new Library2();
library1.addBook(new Book2('Dế Mèn Phiêu Lưu Ký', 'Tô Hoài', 'B001'));
library1.addBook(new Book2('Nhà Giả Kim', 'Paulo Coelho', 'B002'));
library1.showBooks();
// const idToUpdate = prompt('Nhập ID sách cần cập nhật: ');
// library1.updateBook(idToUpdate);
// library1.showBooks();
const idToSearch = prompt('Nhập ID sách cần tìm: ');
console.log(library1.searchBook(idToSearch));
