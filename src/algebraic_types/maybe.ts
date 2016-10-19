import interfaces from "../interfaces/interfaces";
import Just from "./just";
import Nothing from "./nothing";

class Maybe<T> implements interfaces.Maybe<T> {

    public readonly just: interfaces.Just<T>;
    public readonly nothing: interfaces.Nothing;

    public static Just<T>(val: T) {
        return new Maybe<T>(val);
    }

    public static Nothing<T>() {
        return new Maybe<T>();
    }

    public static of<T>(val: T) {
        return new Maybe<T>(val);
    }

    public static isJust(maybe: Maybe<any>) {
        return maybe.just.isJust();
    }

    public static isNothing(maybe: Maybe<any>) {
        return maybe.just.isNothing();
    }

    public constructor(val?: T) {
        if (val !== undefined) {
            this.just = new Just<T>(val);
        } else {
            this.nothing = new Nothing();
        }
    }

    public getOrElse(val: T): T {
        return this.just.isJust() ? this.just.value() : val;
    }

}

export default Maybe;
