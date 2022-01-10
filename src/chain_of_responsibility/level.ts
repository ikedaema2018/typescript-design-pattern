export class Level {
    constructor(public number: number) {}

    public lessThan(lev: Level) {
        return lev.number > this.number;
    } 
}