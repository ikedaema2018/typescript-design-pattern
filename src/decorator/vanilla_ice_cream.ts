import { Icecream } from "./ice_cream";

export class VanillaIcecream implements Icecream {
    public getName() {
        return "バニラアイスクリーム";
    }
    public howSweet() {
        return "バニラ味";
    }
}