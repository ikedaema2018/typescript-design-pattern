import { Collegue as Colleague } from "./collegue";

export interface LoveMediator {
    addColleague: (colleague: Colleague) => void;
    consultation: (collegue1: Colleague, collegue2: Colleague) => number;
}