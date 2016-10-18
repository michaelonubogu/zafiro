import interfaces from "../interfaces/interfaces";
declare class Maybe<T> implements interfaces.Maybe<T> {
    readonly isJust: boolean;
    readonly isNothing: boolean;
    readonly just: interfaces.Just<T>;
    readonly nothing: interfaces.Nothing;
    constructor(val?: T);
}
export default Maybe;
