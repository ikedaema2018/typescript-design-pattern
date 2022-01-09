import { OtherIngredient, Pot, Protein, Soup, Vegitable } from "./variables";

export class HotPot {
    private pot: Pot;
    private soup: Soup;
    private protein: Protein;
    private vegetables: Vegitable[];
    private otherIngredients: OtherIngredient[];

    constructor(pot: Pot) {
        this.pot = pot;
    }
    public addSoup(soup: Soup): void {
        this.soup = soup;
    }
    public addMain(protein: Protein): void {
        this.protein = protein;
    }
    public addVegetables(vegetables: Vegitable[]): void {
        this.vegetables = vegetables;
    }
    public addOtherIngredients(otherIngredients:OtherIngredient[]): void {
        this.otherIngredients = otherIngredients;
    }
}