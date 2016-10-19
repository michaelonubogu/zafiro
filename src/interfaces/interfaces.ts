namespace interfaces {

    export interface Nothing {
        isJust(): boolean;
        isNothing(): boolean;
    }

    export interface Just<T> {
        value(): T;
        isJust(): boolean;
        isNothing(): boolean;
    }

    export interface Maybe<T> {
        just: Just<T>;
        nothing: Nothing;
        getOrElse(val: T): T;
    }

    export interface Either<TLeft, TRight> {
        isLeft: boolean;
        isRight: boolean;
        getLeft(): TLeft;
        getRight(): TRight;
    }

}

export default interfaces;
