import { ConcrateAccepterA } from "./concrate_accepter_a";
import { ConcrareAccepterB } from "./concrate_accepter_b";
import { ConcreteVisitorA } from "./concrete_visitor_a";
import { ConcreteVisitorB } from "./concrete_visitor_b";

const viA = new ConcreteVisitorA();
const viB = new ConcreteVisitorB();
const acA = new ConcrateAccepterA();
const acB = new ConcrareAccepterB();
acA.accept(viA);
acB.accept(viA);
acA.accept(viB);
acB.accept(viB);