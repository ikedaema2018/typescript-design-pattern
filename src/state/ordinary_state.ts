class OrdinaryState implements State {
    /**
     * 朝のあいさつです。通常は、男らしく応えます。
     */
    public morningGreet() {
        return "おっす！";
    }
 
    /**
     * 冬の防寒方法です。走るようです。
     */
    public getProtectionForCold() {
        return "走る";
    }
}