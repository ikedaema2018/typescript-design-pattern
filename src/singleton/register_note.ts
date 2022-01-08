export class RegisterNote {
    private constructor() {}
    private static registerNote: RegisterNote = new RegisterNote();

    public static getInstance() {
        return this.registerNote;
    }

    public a() {
        console.log('udhdahuawhud')
    }
}