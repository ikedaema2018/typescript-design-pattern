import { OtherIngredient, Protein, Soup, Vegitable } from "./variables";

export interface Factory {
    getSoup: () => Soup;
    getMain: () => Protein;
    getVegetables: () => Vegitable[];
    getOtherIngredients: () => OtherIngredient[];
}