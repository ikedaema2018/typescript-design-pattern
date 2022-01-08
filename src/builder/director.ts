import { Builder } from "./builder";

export class Director {
    private builder: Builder;
    public constructor(builder: Builder) {
        this.builder = builder;
    }
    public constract(): void {
        this.builder.addSolvent( 100 );
        this.builder.addSolute( 40 );
        this.builder.abandonSolution( 70 );
        this.builder.addSolvent( 100 );
        this.builder.addSolute( 15 );
    }
}