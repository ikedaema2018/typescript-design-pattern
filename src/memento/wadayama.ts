import { Calc, Memento } from "./calc";

/**
 * 計算する和田山君クラス。
 */
 export class Wadayama {
    private static map: Map<String, Memento> =
                          new Map<String,Memento>();

   /**
    * 計算を実行するクラス
    * @param args
    */
   public static main(args: string[]): void {
       const calc = new Calc();
       for (let n = 1; n <= 5; n++) {
           calc.plus(n);
       }
       console.log(calc.getTemp());
       this.map.set("5までの足し算", calc.createMemento());

       // 数日経過
       // 10までの足し算をしたい。

       const calc2 = new Calc();
       calc2.setMemento(this.map.get("5までの足し算"));
       for (let n = 6; n <= 10; n++) {
           calc2.plus(n);
       }
       console.log(calc2.getTemp());
       this.map.set("10までの足し算", calc2.createMemento());
   }
}