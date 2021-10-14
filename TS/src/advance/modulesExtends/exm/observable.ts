// observable.ts
export class Observable<T> {
  // ... still no implementation ...
}

declare global {
  interface Array<T> {
      toObservable(): Observable<T>;
  }
}

Array.prototype.toObservable = function () {
  // ...
}