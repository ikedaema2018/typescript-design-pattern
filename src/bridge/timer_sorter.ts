import { Sorter } from './sorter';

export abstract class TimerSorter extends Sorter {
    public timerSorter(objs: Object[]): void {
        const start = Date.now();
        this.sort(objs);
        const end = Date.now();
        console.log("time:"+(end - start));
    }
}