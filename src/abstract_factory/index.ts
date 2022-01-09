import { HotPot } from "./hot_pot";
import { MizutakiFactory } from "./mizutaki_factory";
import { Pot } from "./variables";

const factory = new MizutakiFactory();
const hotPot = new HotPot(new Pot());
hotPot.addSoup(factory.getSoup());
hotPot.addMain(factory.getMain());
hotPot.addVegetables(factory.getVegetables());
hotPot.addOtherIngredients(factory.getOtherIngredients());
