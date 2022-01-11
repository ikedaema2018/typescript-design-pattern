import { Teacher } from "./teacher";
import { Yamada } from "./yamada";

//藤原先生クラス(代理人オブジェクト)
export class Fujiwara implements Teacher {
    private yamada: Teacher = new Yamada();
 
    public question1(): void {
        console.log("それは「～～解答1～～」です。");
    }
 
    public question2(): void {
        console.log("それは「～～解答2～～」です。");
    }
 
    public question3(): void {
        if ((new Date().getHours()) < 13) {
            console.log("答えは「");
            //藤原先生には答えられないので、山田先生に聞く
            this.yamada.question3();
            console.log("」となります。");
        } {
            console.log("答えは「");
            console.log("明日藤原先生に聞きます");
            console.log("」となります。");
        }
    }
 
}