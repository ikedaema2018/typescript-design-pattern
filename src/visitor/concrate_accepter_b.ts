import { Visitor } from "./visitor";

export class ConcrareAccepterB {
    private name: string = "ConcreteAcceptorB";
    public getName(): string {
        return this.name;
    }
    public accept(visitor: Visitor) {
        visitor.visit(this);
    }
}