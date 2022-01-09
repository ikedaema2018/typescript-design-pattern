import { DirectoryEntry } from "./directory_entry";

export class SymbolicLink implements DirectoryEntry {
    private name: string = null;
    public constructor(name: string) {
        this.name = name;
    }
    public remove(): void {
        console.log(this.name + "を削除しました")
    }
}