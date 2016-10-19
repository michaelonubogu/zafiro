import interfaces from "../interfaces/interfaces";
import Maybe from "./maybe";
import { isNothing } from "../utils/validation";

class Either<TLeft, TRight> implements interfaces.Either<TLeft, TRight> {

    //
    public readonly left: interfaces.Maybe<TLeft>;

    // 
    public readonly right: interfaces.Maybe<TRight>;

    //
    public static Left<TLeft, TRight>(left: TLeft) {
        return new Either<TLeft, TRight>(left, null);
    }

    //
    public static Right<TLeft, TRight>(right: TRight) {
        return new Either<TLeft, TRight>(null, right);
    }

    //
    public static isLeft(either: Either<any, any>): boolean {
        return Maybe.isJust(either.left);
    }

    //
    public static isRight(either: Either<any, any>): boolean {
        return Maybe.isJust(either.right);
    }

    //
    public constructor(left: (TLeft|interfaces.Nothing), right: (TRight|interfaces.Nothing)) {

        this.left = new Maybe<TLeft>();
        this.right = new Maybe<TRight>();

        if (!isNothing(left)) {
            this.left = new Maybe<TLeft>(<TLeft>left);
        }

        if (!isNothing(right)) {
            this.right = new Maybe<TRight>(<TRight>right);
        }

    }

    //
    public getLeftOrElse(val: TLeft): TLeft {
        return this.left.getOrElse(val);
    }

    //
    public getRightOrElse(val: TRight): TRight {
        return this.right.getOrElse(val);
    }

}

export default Either;
