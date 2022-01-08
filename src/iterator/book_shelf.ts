import { Aggregate } from "./aggregate";
import { Book } from "./book";
import { BookShelfIterator } from "./book_shelf_iterator";

export class BookShelf implements Aggregate {
    private books: Book[];

    constructor() {
        this.books = [];
    }

    public getLength() {
        return this.books.length;
    }

    public getBookAt(num: number) {
        return this.books[num];
    }

    public appendBook(book: Book) {
        this.books.push(book);
    }

    public iterator(): BookShelfIterator {
        return new BookShelfIterator(this);
    }
}