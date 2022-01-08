export interface Builder{
    addSolute(soluteAmount: number): void;
    addSolvent(solventAmount: number): void;
    abandonSolution(solutionAmount: number): void;
    getResult(): Object;
}