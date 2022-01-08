export class Paper {
    public name: string;
    constructor() {}
    
    public createClone(): Paper {
        const newPaper = new Paper();
        newPaper.name = this.name;
        return newPaper
    }
}