import { Cuttable } from "../adapter/cuttable";
import { Wood } from "../adapter/wood";

export abstract class WoodCutPrint{
    public abstract draw(hanzai: Cuttable): void;
    public abstract cut(hanzai: Cuttable): void;
    public abstract print(hanzai: Cuttable): void;

    protected createCuttable(): Cuttable {
        return new Wood();
    }
    public createWoodCutPrint(): void {
        const hanzai: Cuttable = this.createCuttable();
        this.draw(hanzai);
        this.cut(hanzai);
        this.print(hanzai);
    }
}