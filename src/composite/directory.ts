import { DirectoryEntry } from "./directory_entry";
import { File2 } from "./file";

export class Directory implements DirectoryEntry {
    private list: any = null;
    private name: string = null;
    public Directory(name: string){
        this.name = name;
        this.list = [];
    }
    public add(file: File | Directory): void {
        this.list.push(file);
    }
    public remove(): void {
        const itr = this.list.iterator();
        while(itr.hasNext()){
            const obj = itr.next();
            obj.remove();
        }
        console.log(name + "を削除しました。");
    }
}