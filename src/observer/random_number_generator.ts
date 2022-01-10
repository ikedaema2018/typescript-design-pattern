import { NumberGenerator } from "./numver_generator";

export class RandomNumberGenerator extends NumberGenerator {
    private random: number = Math.random();
    private number: number;

    public getNumber(): number {
        return this.number;
    }

    public execute(): void {
        for (let i = 0; i < 20; i++) {
            this.number = 50;
            this.notifyObservers();
        }
    }
}