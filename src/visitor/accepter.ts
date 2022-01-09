import { Visitor } from "./visitor";

export abstract class Acceptor {
    public abstract accept(visitor: Visitor): void;
}