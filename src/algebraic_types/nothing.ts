import interfaces from "../interfaces/interfaces";

class Nothing implements interfaces.Nothing {
    public readonly isNothing: boolean;
    public constructor() {
         this.isNothing = true;
    }
}

export default Nothing;
