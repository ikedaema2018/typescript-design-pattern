import { AgeComparator } from "./age_compare";
import { HeightComparator } from "./height_compare";
import { Human } from "./human";

const compare = (h1: Human, h2: Human) => {
    if (h1.age > h2.age){
        return 1;
    } else if (h1.age == h2.age) {
        return 0;
    } else {
        return -1;
    }
}

class SampleClass{
    private type = -1;
    private COMPARE_AGE = 1;
    private COMPARE_HEIGHT = 2;
    private COMPARE_WEIGHT = 3;
    constructor(compareType: number){
        this.type = compareType;
    }
    public compare(h1: Human, h2: Human): number {
        if(this.type == this.COMPARE_AGE){
            return new AgeComparator().compare(h1, h2);
        }else if(this.type == this.COMPARE_HEIGHT){
            return new HeightComparator().compare(h1, h2);
        }
    }
}　