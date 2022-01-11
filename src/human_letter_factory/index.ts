import { HumanLetter } from "../fly_weight/human_letter";

/**
 * 人文字を管理するクラス。
 * Singleton とする。
 */
 export class HumanLetterFactory {
    /**
     * 人文字のマップ
     */
    private map = new Map<String, HumanLetter>();
 
    /**
     * Singleton の生成
     */
    private static singleton = new HumanLetterFactory();
 
    /**
     * Singleton パターン
     */
    private HumanLetterFactory() {}
 
    /**
     * インスタンスを取得するメソッド
     * 唯一のインスタンスが返される。
     * @return singleton
     */
    public static getInstance() {
        return this.singleton;
    }
 
    /**
     * 人文字を取得するメソッド。
     * すでに持っているものであれば、map から返す。
     * map に持っていないものは生成して map への登録を行った後に返り値として返す。
     *
     * @param letter
     * @return humanLetter
     */
    public getHumanLetter(letter: string): HumanLetter {
        let humanLetter = this.map.get(letter);
        if (humanLetter == null) {
            humanLetter = new HumanLetter(letter);
            this.map.set(letter, humanLetter);
        }
        return humanLetter;
    }
 
}