import { NumberGenerator } from "./numver_generator";

export interface Observer {
    update(generator: NumberGenerator): void;
}