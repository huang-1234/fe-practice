let sym: symbol = Symbol('a');
let sym2: Symbol = Symbol('b');
sym = sym2 // ok or fail?  //“symbol”是基元，但“Symbol”是包装器对象。如可能首选使用“symbol”。
sym2 = sym // ok or fail?
let str: String = new String('a');
let str2: string = 'a';
str = str2; // ok or fail?
str2 = str; // ok or fail?

