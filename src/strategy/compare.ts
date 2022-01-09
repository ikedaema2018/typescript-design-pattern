import { Human } from "./human";

export interface Comparator {
    compare(h1: Human, h2: Human): number;
}