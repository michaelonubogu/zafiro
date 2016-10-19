import interfaces from "../interfaces/interfaces";
import Maybe from "./maybe";

class Either<TLeft, TRight> implements interfaces.Either<TLeft, TRight> {

    public readonly isLeft: boolean;
    public readonly isRight: boolean;

    private _left: Maybe<TLeft>;
    private _right: Maybe<TRight>;

    public static Left<TLeft, TRight>(left: TLeft) {
        return new Either<TLeft, TRight>(left, null);
    }

    public static Right<TLeft, TRight>(right: TRight) {
        return new Either<TLeft, TRight>(null, right);
    }

    public constructor(left: (TLeft|null), right: (TRight|null)) {

        this._left = new Maybe<TLeft>();
        this._right = new Maybe<TRight>();

        if (left !== null) {
            this._left = new Maybe<TLeft>(left);
            this.isLeft = true;
            this.isRight = false;
        }

        if (right !== null) {
            this._right = new Maybe<TRight>(right);
            this.isLeft = false;
            this.isRight = true;
        }

    }

    public getLeft(): TLeft {
        return this._left.just.value();
    }

    public getRight(): TRight {
        return this._right.just.value();
    }

}

export default Either;
