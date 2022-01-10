import { BookList } from "./book_list";
import { LendingList } from "./lending_list";

//図書委員の中村くん
export class Librarian {
    public searchBook(bookName: string): string {
        //本を探す
        const bookList = new BookList();
        const location = bookList.searchBook(bookName);
        //本の場所がnullではない(所蔵してる)とき
        if (location != null) {
            //貸出中かチェックする
            const lendingList = new LendingList();
            if (lendingList.check(bookName)) {
                //貸出中のとき
                return "貸出中です";
            } else {
                //貸出中ではないとき
                return location;
            }
        //所蔵してないとき
        } else {
            return "その本は所蔵していません";
        }
    }
}