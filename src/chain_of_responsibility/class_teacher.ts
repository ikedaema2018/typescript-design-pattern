import { Level } from "./level";
import { Question } from "./question";
import { Responsible } from "./responsible";

export class ClassTeacher extends Responsible {
    private responsibleLevel: Level = new Level(2);
    public constructor(responsiblePerson: string){
        super(responsiblePerson);
    }   
    protected beAbleToJudge(question: Question): boolean {
        if(question.level.lessThan(this.responsibleLevel)){
            return true;
        }
        return false;
    }
    protected judge(question: Question): void {
        
    }
}