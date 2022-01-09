import { Icecream } from "./ice_cream";

export class CashewNutsToppingIcecream implements Icecream{
    private ice: Icecream = null;
    public constructor(ice: Icecream){
        this.ice = ice;
    }
    public getName(): string {
        let name = "カシューナッツ";
        name += this.ice.getName();
        return name;
    }
    public howSweet(): string {
        return this.ice.howSweet();
    }
}