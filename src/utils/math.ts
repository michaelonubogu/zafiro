import { reduce, length } from "./arrays";

export let addition = (a: number) => (b: number) => a + b;
export let subtraction = (a: number) => (b: number) => a - b;
export let division = (a: number) => (b: number) => a / b;
export let multiplication = (a: number) => (b: number) => a * b;

export let avg = (arr: any[]) => {
    let t = reduce<number>((c, p) => c + p, 0)(arr);
    let l = length(arr);
    return division(t)(l);
};
