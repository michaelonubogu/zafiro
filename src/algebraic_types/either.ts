import interfaces from "../interfaces/interfaces";
import Maybe from "./maybe";

class Either<TLeft, TRight> implements interfaces.Either<TLeft, TRight> {

    private _left: Maybe<TLeft>;
    private _right: Maybe<TRight>;

    public static Left<TLeft, TRight>(left: TLeft) {
        return new Either(left, null);
    }

    public static Right<TLeft, TRight>(right: TRight) {
        return new Either(null, right);
    }

    public constructor(left: TLeft, right: TRight) {
        this._left = (left !== undefined && left !== null) ? new Maybe<TLeft>(left) : new Maybe<TLeft>();
        this._right = (right !== undefined && right !== null) ? new Maybe<TRight>(right) : new Maybe<TRight>();
    }

    public isLeft(): boolean {
        return this._left.isJust;
    }

    public isRight() {
        return this._right.isJust;
    }

}

export default Either;
