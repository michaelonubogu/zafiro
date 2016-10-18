declare namespace interfaces {
    interface Nothing {
        isNothing: boolean;
    }
    interface Just<T> {
        value: T;
    }
    interface Maybe<T> {
        isJust: boolean;
        isNothing: boolean;
        just: Just<T>;
        nothing: Nothing;
    }
    interface Either<TLeft, TRight> {
    }
}
export default interfaces;
