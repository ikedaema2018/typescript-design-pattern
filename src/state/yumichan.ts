export class Yumichan {
    /** 通常の由実ちゃんを表す */
    private static STATE_ORDINARY: number = 0;
 
    /** 機嫌の悪い由実ちゃんを表す */
    private static STATE_IN_BAD_MOOD: number = 1;
 
    /** 由実ちゃんの状態を表すプロパティ */
    private state: number = -1;
 
    /**
     * 由実ちゃんの状態を変更するメソッド
     * @param state
     */
    public changeState(state: number): void {
        this.state = state;
    }
 
    /**
     * 朝のあいさつを返すメソッド
     * @return
     */
    public morningGreet(): string {
        if (this.state == Yumichan.STATE_ORDINARY) {
            return "おっす!";
        } else if (this.state == Yumichan.STATE_IN_BAD_MOOD) {
            return "おお";
        } else {
            return "・・・";
        }
    }
 
    /**
     * 寒いときの防寒具を取得するメソッド
     * @return
     */
    public getProtectionForCold(): string {
        if (this.state == Yumichan.STATE_ORDINARY) {
            return "走る";
        } else if (this.state == Yumichan.STATE_IN_BAD_MOOD) {
            return "ももひきをはく";
        } else {
            return "・・・";
        }
    }
}