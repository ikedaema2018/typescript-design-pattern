import { Observer } from "./observer";

export abstract class NumberGenerator {
    private observers = [];
    public addObserver(observer: Observer): void {
        this.observers.push(observer);
    }
    public deleteObserver(observer: Observer): void {
        // this.observers.remove(observer);
    }
    public notifyObservers(): void {
        for (let i = 0; i < this.observers.length; i++) {
            const obserber = this.observers[i];
            obserber.update(this);
        }
    }

    public abstract getNumber(): number;
    public abstract execute(): void;
}