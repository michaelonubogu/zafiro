import interfaces from "../interfaces/interfaces";

class Just<T> implements interfaces.Just<T> {

    private readonly _value: T;

    public constructor(val: T) {
        this._value = val;
    }

    public isJust() {
        return true;
    }

    public isNothing() {
        return false;
    }

    public value() {
        return this._value;
    }

}

export default Just;
