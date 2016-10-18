import interfaces from "../interfaces/interfaces";

class Just<T> implements interfaces.Just<T> {
    public readonly value: T;
    public constructor(val: T) {
        this.value = val;
    }
}

export default Just;
