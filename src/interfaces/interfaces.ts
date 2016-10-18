namespace interfaces {

    export interface Nothing {
        isNothing: boolean;
    }

    export interface Just<T> {
        value: T;
    }

    export interface Maybe<T> {
        isJust: boolean;
        isNothing: boolean;
        just: Just<T>;
        nothing: Nothing;
    }

    export interface Either<TLeft, TRight> {
        // 
    }

}

export default interfaces;
