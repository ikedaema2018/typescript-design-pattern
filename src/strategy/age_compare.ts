import { Comparator } from "./compare";
import { Human } from "./human";

export class AgeComparator implements Comparator {
    public compare(h1: Human, h2: Human): number {
        if(h1.age > h2.age){
            return 1;
        }else if(h1.age == h2.age){
            return 0;
        }else{
            return -1;
        }
    }
}