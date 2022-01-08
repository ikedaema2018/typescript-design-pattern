import { Cuttable } from "../adapter/cuttable";
import { Wood } from "../adapter/wood";

export abstract class WoodCutPrint{
    public abstract draw(hanzai: Cuttable): void;
    public abstract cut(hanzai: Cuttable): void;
    public abstract print(hanzai: Cuttable): void;
    public createWoodCutPrint(): void {
        const hanzai = new Wood();
        this.draw(hanzai);
        this.cut(hanzai);
        this.print(hanzai);
    }
}