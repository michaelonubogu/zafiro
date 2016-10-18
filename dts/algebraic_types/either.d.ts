import interfaces from "../interfaces/interfaces";
declare class Either<TLeft, TRight> implements interfaces.Either<TLeft, TRight> {
    private _left;
    private _right;
    static Left<TLeft, TRight>(left: TLeft): Either<TLeft, any>;
    static Right<TLeft, TRight>(right: TRight): Either<any, TRight>;
    constructor(left: TLeft, right: TRight);
    isLeft(): boolean;
    isRight(): boolean;
}
export default Either;
