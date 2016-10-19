export let typeOf = (val: any) => typeof val;
export let isTypeof = (typeName: string) => (val: any) => typeOf(val) === typeName;
export let isNumber = isTypeof("number");
export let isString = isTypeof("string");
export let isNull = (val: any) => val === null;
export let isUndefined = (val: any) => val === undefined;
export let isNothing = (val: any) => isNull(val) || isUndefined(val);
