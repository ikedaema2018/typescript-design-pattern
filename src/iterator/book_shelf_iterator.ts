import { Book } from "./book";
import { BookShelf } from "./book_shelf";
import { Iterator } from "./iterator";

export class BookShelfIterator implements Iterator {
    private bookShelf: BookShelf;
    private current: number;
    constructor(bookShelf: BookShelf) {
        this.bookShelf = bookShelf;
        this.current = 0
    }

    public hasNext(): boolean {
        return this.bookShelf.getLength() > (this.current + 1)
    }

    public next(): Book {
        this.current += 1;
        return this.bookShelf.getBookAt(this.current);
    }
}