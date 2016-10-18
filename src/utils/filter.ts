let filter = <T>(querey: (item: T) => boolean) => (arr: T[]) => arr.filter(querey);

export default filter;
