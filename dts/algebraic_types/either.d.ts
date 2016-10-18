import interfaces from "../interfaces/interfaces";
declare class Either<TLeft, TRight> implements interfaces.Either<TLeft, TRight> {
    readonly isLeft: boolean;
    readonly isRight: boolean;
    private _left;
    private _right;
    static Left<TLeft, TRight>(left: TLeft): Either<TLeft, TRight>;
    static Right<TLeft, TRight>(right: TRight): Either<TLeft, TRight>;
    constructor(left: (TLeft | null), right: (TRight | null));
    getLeft(): TLeft;
    getRight(): TRight;
}
export default Either;
