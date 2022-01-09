import { ConcrateAccepterA } from "./concrate_accepter_a";
import { ConcrareAccepterB } from "./concrate_accepter_b";
import { Visitor } from "./visitor";

export class ConcreteVisitorA extends Visitor {
    private name: string = "ConcreteVisitorA";
    public visit(accepter: ConcrateAccepterA | ConcrareAccepterB) {
        if (accepter instanceof ConcrateAccepterA) {
            console.log(this.name + " が " + accepter.getName() + " を訪問しました。");
        } else if (accepter instanceof ConcrareAccepterB) {
            console.log(this.name + " が " + accepter.getName() + " を訪問しました。");
        }
    }
}