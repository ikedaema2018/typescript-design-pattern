import { ChairPerson } from "./chair_person";
import { Taro } from "./taro";

export class NewTaro extends Taro implements ChairPerson {
    organizeClass() {
        this.enjoyWithAllClassMate();
    }
}