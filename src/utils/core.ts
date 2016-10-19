export let compose2 = <T1, T2, T3, TResult>(
    f1: (x: T2) => TResult,
    f2: (x: T1) => T2
) => (x: any) => f1(f2(x));

export let compose3 = <T1, T2, T3, TResult>(
    f1: (x: T3) => TResult,
    f2: (x: T2) => T3,
    f3: (x: T1) => T2
) => (x: any) => f1(f2(f3(x)));

export let compose4 = <T1, T2, T3, T4, TResult>(
    f1: (x: T4) => TResult,
    f2: (x: T3) => T4,
    f3: (x: T2) => T3,
    f4: (x: T1) => T2
) => (x: any) => f1(f2(f3(f4(x))));

export let compose5 = <T1, T2, T3, T4, T5, TResult>(
    f1: (x: T5) => TResult,
    f2: (x: T4) => T5,
    f3: (x: T3) => T4,
    f4: (x: T2) => T3,
    f5: (x: T1) => T2
) => (x: any) => f1(f2(f3(f4(f5(x)))));

// TODO curry
