import { NumberGenerator } from "./numver_generator";
import { Observer } from "./observer";

export class DegitObserver implements Observer {
    public update(generator: NumberGenerator): void {
        console.log("DegitObserver:" + generator.getNumber());
        try {
            console.log('sleep')
        } catch (e) {
            console.log('jdw')
        }
    }
}