import { Factory } from "./factory";
import { OtherIngredient, Pot, Protein, Soup, Vegitable } from "./variables";

class ChickenBonesSoup extends Soup {};
class Chicken extends Protein {};
class ChineseCabbage extends Vegitable {};
class Leek extends Vegitable {};
class Chrysanthemum extends Vegitable {};
class Tofu extends OtherIngredient {};

export class MizutakiFactory implements Factory {
    public getSoup(): Soup {
        return new ChickenBonesSoup();
    }
    public getMain(): Protein {
        return new Chicken();
    }
    public getVegetables(): Vegitable[] {
        const vegetables: Vegitable[] = [];
        vegetables.push(new ChineseCabbage());
        vegetables.push(new Leek());
        vegetables.push(new Chrysanthemum());
        return vegetables;
    }
    public getOtherIngredients(): OtherIngredient[] {
        const otherIngredients: OtherIngredient[] = [];
        otherIngredients.push(new Tofu());
        return otherIngredients;
    }
}