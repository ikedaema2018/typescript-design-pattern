export class Human {
 
    public name: string;
    public height: number = -1;
    public weight: number = -1;
    public age: number = -1;
 
    public Human(name: string, height: number, weight: number, age: number){
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.age = age;
    }
}