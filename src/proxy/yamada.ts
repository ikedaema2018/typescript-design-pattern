import { Teacher } from "./teacher";

//山田先生クラス(本人オブジェクト)
export class Yamada implements Teacher {
 
    public question1(): void {
        console.log("～～解答1～～");
    }
 
    public question2(): void {
        console.log("～～解答2～～");
    }
 
    public question3(): void {
        console.log("～～解答3～～");
    }
 
}