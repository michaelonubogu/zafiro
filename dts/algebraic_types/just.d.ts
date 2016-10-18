import interfaces from "../interfaces/interfaces";
declare class Just<T> implements interfaces.Just<T> {
    readonly value: T;
    constructor(val: T);
}
export default Just;
