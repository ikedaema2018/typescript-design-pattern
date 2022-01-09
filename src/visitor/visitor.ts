import { ConcrateAccepterA } from "./concrate_accepter_a";
import { ConcrareAccepterB } from "./concrate_accepter_b";

export abstract class Visitor {
    public abstract visit(acceptor: ConcrateAccepterA | ConcrareAccepterB): void;
}