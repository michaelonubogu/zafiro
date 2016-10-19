import interfaces from "../interfaces/interfaces";

class Maybe<T> implements interfaces.Maybe<T> {

    public readonly value: (interfaces.Nothing|T);

    public static Just<T>(val: T): Maybe<T> {
        return new Maybe<T>(val);
    }

    public static Nothing<T>(): Maybe<T> {
        return new Maybe<T>();
    }

    public static isJust(maybe: Maybe<any>): boolean {
        return maybe.value !== null && maybe.value !== undefined;
    }

    public static isNothing(maybe: Maybe<any>): boolean {
        return maybe.value === null || maybe.value === undefined;
    }

    public constructor(val?: T) {
        if (val !== undefined) {
            this.value = val;
        } else {
            this.value = null;
        }
    }

    public getOrElse(val: T): T {
        return Maybe.isJust(this) ? <T>this.value : val;
    }

}

export default Maybe;
