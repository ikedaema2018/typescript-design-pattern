import { Paper } from "./paper";

export class Teacher{
    public createManyCrystals(): Paper[] {
        const prototype = new Paper();
        prototype.name = 'yuki';

        const papers = [];
        for (let i = 0; i < 100; i++) {
            papers[i] = prototype.createClone();
        }
        return papers;
    }
    private drawCrystal(paper: Paper): void {
        // きれいに描くため時間がかかる
    }
    private cutAccordanceWithLine(paper: Paper): void {
        // 描かれた線に沿ってきれいに切るには時間がかかる
    }
}