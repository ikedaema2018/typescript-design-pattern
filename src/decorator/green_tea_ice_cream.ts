import { Icecream } from "./ice_cream";

export class GreenTeaIcecream implements Icecream{
    public getName(){
        return "抹茶アイスクリーム";
    }
    public howSweet(){
        return "抹茶味";
    }
}