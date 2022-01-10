import { DegitObserver } from "./degit_observer";
import { GraphObserver } from "./graph_observer";
import { RandomNumberGenerator } from "./random_number_generator";

const generator = new RandomNumberGenerator();
const degitObserver = new DegitObserver();
const graphObserver = new GraphObserver();
generator.addObserver(degitObserver);
generator.addObserver(graphObserver);
generator.execute();