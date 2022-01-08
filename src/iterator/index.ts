import { Book } from "./book";
import { BookShelf } from "./book_shelf";

const bookShelf = new BookShelf();

bookShelf.appendBook(new Book("Git Hub"));
bookShelf.appendBook(new Book("Qiita"));
bookShelf.appendBook(new Book("Java"));
bookShelf.appendBook(new Book("Iterator pattern"));

const iterator = bookShelf.iterator();
while(iterator.hasNext()) {
    const book = iterator.next();
    console.log(book.getName());
}