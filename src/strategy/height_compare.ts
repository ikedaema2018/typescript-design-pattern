import { Comparator } from "./compare";

export class HeightComparator implements Comparator {
    public compare(h1, h2) {
        if(h1.height > h2.height){
            return 1;
        }else if(h1.height == h2.height){
            return 0;
        }else{
            return -1;
        }
    }
}