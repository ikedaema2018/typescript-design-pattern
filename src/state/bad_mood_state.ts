class BadMoodState implements State {
    /**
     * 朝のあいさつです。機嫌の悪いときは、ぶっきらぼうに応えます。
     */
    public morningGreet(): string {
        return "おお";
    }
 
    /**
     * 冬の防寒方法です。機嫌の悪いときはももひきをはきます。
     */
    public getProtectionForCold(): string {
        return "ももひき";
    }
}