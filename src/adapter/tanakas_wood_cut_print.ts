import { WoodCutPrint } from "../template/wood_cut_print";
import { Cuttable } from "./cuttable";

export class TanakasWoodCutPrint extends WoodCutPrint {
    public draw(hanzai: Cuttable): void {
        console.log("hanzai にマジックを使って大好きな女の子の絵を描く");
    }
    public cut(hanzai: Cuttable): void {
        console.log("彫刻刀を使って細部まで丁寧に hanzai を彫る");
    }
    public print(hanzai: Cuttable): void {
        console.log("版画インクと馬簾を使って豪快にプリントする");
    }
}