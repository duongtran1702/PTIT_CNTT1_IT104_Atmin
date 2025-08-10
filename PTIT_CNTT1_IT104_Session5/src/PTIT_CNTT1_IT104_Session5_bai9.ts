class Book3 {
    private title: string;
    private author: string;
    private id: number;
    protected year: number;
    constructor(title: string, author: string, id: number, year: number) {
        this.title = title;
        this.author = author;
        this.id = id;
        this.year = year;
    }

    getTitle(): string {
        return this.title;
    }
    getAuthor(): string {
        return this.author;
    }
    getId(): number {
        return this.id;
    }
    getYear(): number {
        return this.year;
    }
}

class Library3 {
    books: Book3[] = [];
    addBook(book: Book3): void {
        this.books.push(book);
    }
    showBooks(): void {
        this.books.forEach((book, index) => {
            console.log(
                `Sách ${
                    index + 1
                }: ${book.getTitle()} - ${book.getAuthor()} - ID: ${book.getId()} - Năm xuất bản: ${book.getYear()}`
            );
        });
    }
    deleteBookById(id: number): void {
        const index = this.books.findIndex((book) => book.getId() === id);
        if (index !== -1) {
            this.books.splice(index, 1);
            console.log(`Sách với ID ${id} đã được xóa.`);
        } else {
            console.log(`Không tìm thấy sách với ID ${id}.`);
        }
    }

    updateBookById(
        id: number,
        newTitle: string,
        newAuthor: string,
        newYear: number
    ): void {
        const index = this.books.findIndex((book) => book.getId() === id);
        if (index !== -1) {
            this.books[index] = new Book3(newTitle, newAuthor, id, newYear);
            console.log(`Sách với ID ${id} đã được cập nhật.`);
        } else {
            console.log(`Không tìm thấy sách với ID ${id}.`);
        }
    }
}

const library3 = new Library3();
library3.addBook(new Book3('Dế Mèn Phiêu Lưu Ký', 'Tô Hoài', 1, 1941));
library3.addBook(new Book3('Nhà Giả Kim', 'Paulo Coelho', 2, 1988));

library3.showBooks();

library3.updateBookById(2, 'Nhà Giả Kim - Bản Mới', 'Paulo Coelho', 2020);
library3.showBooks();

library3.deleteBookById(1);
library3.showBooks();
