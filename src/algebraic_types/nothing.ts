import interfaces from "../interfaces/interfaces";

class Nothing implements interfaces.Nothing {

    public isJust() {
        return true;
    }

    public isNothing() {
        return false;
    }

}

export default Nothing;
