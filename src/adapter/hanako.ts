import { ChairPerson } from "./chair_person";
import { Taro } from "./taro";

export class Hanako implements ChairPerson {
    private taro: Taro;
    constructor() {
        this.taro = new Taro();
    }
    organizeClass() {
        this.taro.enjoyWithAllClassMate();
    }
}