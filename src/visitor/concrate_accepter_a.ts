import { Visitor } from "./visitor";

export class ConcrateAccepterA {
    private name: string = "ConcreteAcceptorA";
    public getName(): string {
        return this.name;
    }
    public accept(visitor: Visitor) {
        visitor.visit(this);
    }
}