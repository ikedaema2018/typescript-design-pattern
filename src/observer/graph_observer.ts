import { NumberGenerator } from "./numver_generator";
import { Observer } from "./observer";

export class GraphObserver implements Observer {
    public update(generator: NumberGenerator): void {
        console.log("GraphObserver:");
        const count = generator.getNumber();
        for (let i = 0; i < count; i++) {
            console.log("*");
        }
        console.log("");
        try {
            console.log("100");
        } catch (e) {

        }
    }
}