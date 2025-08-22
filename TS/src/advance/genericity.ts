/**
 * TS 泛型编程
 */
type MyPartial<T> = {
  [K in keyof T]?: T[K];
};

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};
interface Person {
  name: string;
  age: number;
}
type PartialPerson = {
  name?: string;
  age?: number
};

type MyRequired<T> = {
  [K in keyof T]-?: T[K];
};

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type MyExclude<T, K> = T extends K ? never : T;

type MyOmit<T, K extends keyof T> = MyPick<T, MyExclude<keyof T, K>>;



type MyPartialPerson = MyPartial<Person>;
type MyReadonlyPerson = MyReadonly<Person>;
type MyRequiredPerson = MyRequired<PartialPerson>;
type MyPickPerson = MyPick<Person, 'name'>;
type MyExcludePerson = MyExclude<keyof Person, 'age'>;
