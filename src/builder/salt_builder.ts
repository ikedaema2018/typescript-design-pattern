import { Builder } from "./builder";
import { SaltWater } from "./salt_water";

export class SaltWaterBuilder implements Builder {
    private saltWater: SaltWater;
    public SaltWaterBuilder(){
        this.saltWater = new SaltWater(0,0);
    }
    public addSolute(saltAmount: number): void {
        this.saltWater.salt += saltAmount;
    }
    public addSolvent(waterAmount: number): void {
        this.saltWater.water += waterAmount;
    }
    public abandonSolution(saltWaterAmount: number): void {
        const saltDelta = saltWaterAmount *
                      (this.saltWater.salt / (this.saltWater.salt + this.saltWater.water));
        const waterDelta = saltWaterAmount *
                      (this.saltWater.water / (this.saltWater.salt + this.saltWater.water));
        this.saltWater.salt -= saltDelta;
        this.saltWater.water -= waterDelta;
    }
    public getResult(): SaltWater {
        return this.saltWater;
    }
}