export let filter = <T>(querey: (item: T) => boolean) => (arr: T[]) => arr.filter(querey);
export let map = <T1, T2>(mapper: (item: T1) => T2) => (arr: T1[]) => arr.filter(mapper);

export let reduce = <T>(
    reducer: (prev: T, curr: T, index: number, arr: T[]) => T,
    initial: T
) => (arr: T[]) => arr.reduce(reducer, initial);

export let isArray = (val: any) => Array.isArray(val);
export let length = (arr: any[]) => arr.length;
