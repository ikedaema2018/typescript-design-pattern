import { Collegue as Colleague } from "./collegue";
import { LoveMediator } from "./love_mediator";

export class Saito implements LoveMediator {
    private colleagueMap: Map<String, Colleague> = new Map<String, Colleague>();
    public addColleague(colleague: Colleague): void {
        this.colleagueMap.set(colleague.getName(), colleague);
    }
    public consultation(colleagueInLove: Colleague, secretLover: Colleague): number {
        const possibility= 0;
        return possibility;
    }
}