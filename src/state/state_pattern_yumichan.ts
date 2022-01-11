export class StatePatternYumichan {
 
    /** 由実ちゃんの状態を表すプロパティ */
    private state: State = null;
 
    /**
     * 由実ちゃんの状態を変更するメソッド
     * @param state
     */
    private changeState(state: State): void {
        this.state = state;
    }
 
    /**
     * 朝のあいさつを返すメソッド
     * @return
     */
    public morningGreet(): string {
        return this.state.morningGreet();
    }
 
    /**
     * 寒いときの対策を取得するメソッド
     * @return
     */
    public getProtectionForCold(): string {
        return this.state.getProtectionForCold();
    }
}