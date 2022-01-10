/**
 * ひとつの計算を表すクラス。
 */
 export class Calc {
    private temp: number = 0;
 
    /**
     * 足し算を実行するメソッド
     * @param plus
     */
    public plus(plus: number): void {
        this.temp += plus;
    }
 
    /**
     * 途中経過を Memento として取得するメソッド
     * @return memento
     */
    public createMemento(): Memento {
        return new Memento(this.temp);
    }
 
    /**
     * Memento から計算経過を取得して、temp にセットする
     * @param memento
     */
    public setMemento(memento: Memento): void {
        this.temp = memento.result;
    }
 
    /**
     * 計算結果を取得するメソッド
     * @return temp
     */
    public getTemp(): number {
        return this.temp;
    }
}

/**
 * 途中経過を保持する Memento クラス
 */
export class Memento {
    /** 計算の途中経過を表す */
    public result: number = -1;

    /**
     * 計算経過を引数に受け取るコンストラクタ
     * @param temp
     */
    constructor(temp: number) {
        this.result = temp;
    }
}