import { Librarian } from "./librarian";

//山田くん
export class Visitor {
    public static main(args: string[]): void {
        //窓口の中村くんを作る
        const nakamura = new Librarian();
        //中村くんに昆虫図鑑の場所を聞く
        const location = nakamura.searchBook("昆虫図鑑");
        if(location == "貸出中です"){
            console.log("貸出中かよ…");
        }else if(location == ("その本は所蔵していません")){
            console.log("なんだ、ないのか");
        }else{
            console.log("サンキュ！");
        }
    }
}