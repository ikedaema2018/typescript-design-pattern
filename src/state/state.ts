/**
 * 由実ちゃんの状態を表すクラスが実装すべきインタフェース
 */
 
 interface State {
    /**
     * 朝のあいさつを返すメソッドを定義する
     */
    morningGreet(): string;
 
    /**
     * 寒いときの対策を返すメソッドを定義する
     */
    getProtectionForCold(): string;
}