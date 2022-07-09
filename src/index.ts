type X = string | number;

type Id<T> = T extends { id: infer Id extends X } ? Id : never;

declare function f<T>(value: T, id: Id<T>): void;

f({ id: 1 }, 2);
