import { createModuleResolutionCache } from "typescript";
import { Question } from "./question";

export abstract class Responsible {
    private next: Responsible = null;
    private responsiblePerson: string = null;
    public constructor(responsiblePerson: string){
        this.responsiblePerson = responsiblePerson;
    }
    public setNext(next: Responsible): Responsible {
        this.next = next;
        return next;
    }
    public putQuestion(question: Question): void {
        if(this.beAbleToJudge(question)){
            this.judge(question);
        }else if(this.next != null){
            this.next.putQuestion(question);
        }else{
            console.log("誰にも判断できませんでした。やってみなさい。");
        }
    }
    protected abstract beAbleToJudge(question: Question): boolean;
    protected abstract judge(question: Question): void;
}