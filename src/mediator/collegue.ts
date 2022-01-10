export interface Collegue {
    needsAdvice: () => void;
    setSecretLover: (colleague: Collegue) => void;
    getName: () => string;
    name: string;
}