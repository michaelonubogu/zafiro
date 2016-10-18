import interfaces from "../interfaces/interfaces";
import Just from "./just";
import Nothing from "./nothing";

class Maybe<T> implements interfaces.Maybe<T> {

    public readonly isJust: boolean;
    public readonly isNothing: boolean;
    public readonly just: interfaces.Just<T>;
    public readonly nothing: interfaces.Nothing;

    public constructor(val?: T) {
        if (val !== undefined) {
            this.isJust = true;
            this.isNothing = false;
            this.nothing = null;
            this.just = new Just<T>(val);
        } else {
            this.isJust = false;
            this.isNothing = true;
            this.nothing = new Nothing();
            this.just = null;
        }
    }
}

export default Maybe;
