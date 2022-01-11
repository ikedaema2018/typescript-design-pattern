export class HumanLetter {
    private char: string;
    public getLetter() {
        return this.char;
    }
    constructor(char: string) {
        this.char = char;
    }
}