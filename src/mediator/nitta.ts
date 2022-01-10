import { Collegue as Colleague } from "./collegue";
import { LoveMediator } from "./love_mediator";
import { Saito } from "./saito";

export class Nitta implements Colleague {
    public name: string = "新田";
    private tension: number;
    private secretLover: Colleague = null;
    private mediator: LoveMediator = new Saito();
     
    public getName(): string {
        return this.name;
    }
    public setSecretLover(colleague: Colleague): void {
        this.secretLover = colleague;
    }
    public needsAdvice(): void {
        this.tension = this.mediator.consultation(this, this.secretLover);
    }
}