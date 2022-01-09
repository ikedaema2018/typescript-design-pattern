import { DirectoryEntry } from "./directory_entry";

export class File2 implements DirectoryEntry {
    private name: string = null;
    public File(name: string){
        this.name = name;
    }
    public remove(): void {
        console.log(this.name + "を削除しました");
    }
}