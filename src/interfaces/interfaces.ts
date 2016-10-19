namespace interfaces {

    export type Nothing = (null | undefined);

    export interface Maybe<T> {
        value: (Nothing|T);
        getOrElse(val: T): T;
    }

    export interface Either<TLeft, TRight> {
        left: Maybe<TLeft>;
        right: Maybe<TRight>;
        getLeftOrElse(val: TLeft): TLeft;
        getRightOrElse(val: TRight): TRight;
    }

}

export default interfaces;
