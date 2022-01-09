import { SortImple } from "./sort_imple";

export class Sorter{
    private sortImple: SortImple;
    constructor(sortImple: SortImple) {
        this.sortImple = sortImple
    }
    public sort(objs: Object[]): void {
        this.sortImple.sort(objs) 
    };
}