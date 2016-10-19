import interfaces from "../interfaces/interfaces";
import { isNothing } from "../utils/validation";

class Maybe<T> implements interfaces.Maybe<T> {

    // The value of the Maybe
    public readonly value: (interfaces.Nothing|T);

    // Creates a new Maybe with a value (Just)
    public static Just<T>(val: T): interfaces.Maybe<T> {
        return new Maybe<T>(val);
    }

    // Creates a new Maybe without a value (Nothing)
    public static Nothing<T>(): interfaces.Maybe<T> {
        return new Maybe<T>();
    }

    // TODO
    public static maybe() {
        // TODO
    }

    // Creates a Maybe instance of a given value (Just)
    public static of<T>(val: T): interfaces.Maybe<T> {
        return Maybe.Just<T>(val);
    }

    // Checks if a given Maybe has a value (Just)
    public static isJust(maybe: interfaces.Maybe<any>): boolean {
        return !isNothing(maybe.value);
    }

    // Checks if a given Maybe lacks a value (Nothing)
    public static isNothing(maybe: interfaces.Maybe<any>): boolean {
        return isNothing(maybe.value);
    }

    // Creates new maybe with (Just) or without (Nothing) a value 
    public constructor(val?: T) {
        if (!isNothing(val)) {
            this.value = val;
        } else {
            this.value = null;
        }
    }

    // Gets the value (Just) of the Maybe or uses the provided value
    // if no value is available (Nothing)
    public getOrElse(val: T): T {
        return Maybe.isJust(this) ? <T>this.value : val;
    }

    // Maps the Maybe to a new Maybe
    public map<T2>(func: (value: T) => T2): interfaces.Maybe<T2> {
        if (Maybe.isJust(this)) {
            return Maybe.Just<T2>(func(<T>this.value));
        } else {
            return Maybe.Nothing<T2>();
        }
    }

    // TODO
    public apply() {
        // TODO
    }

    // TODO
    public chain() {
        // TODO
    }

    // TODO
    public reduce() {
        // TODO
    }

    // TODO
    public equals() {
        // TODO
    }

    // TODO
    public toString() {
        // TODO
    }

}

export default Maybe;
