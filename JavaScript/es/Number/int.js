
/* 对于学过其他语言的程序员来说，JS中缺少显式整数类型常常令人困惑。许多编程语言支持多种数字类型，
如浮点型、双精度型、整数型和双精度型，但JS却不是这样。在JS中，按照IEEE 754-2008标准的定义，
所有数字都以双精度64位浮点格式表示。
在此标准下，无法精确表示的非常大的整数将自动四舍五入。确切地说，JS 中的Number类型只能安全地
表示-9007199254740991 (-(2^53-1)) 和9007199254740991(2^53-1)之间的整数，任何超出此范围的整数值都可能失去精度。 */
// console.log(9007199254740992 === 9007199254740993)
// console.log(9007199254740997n);    // → 9007199254740995n
// console.log(9007199254740997);     // → 9007199254740996

/*
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

console.log(3 * Number(9007199254740997n));
console.log(3n * 9007199254740997n);
 */

/*
// 除一元加号(`+`)运算符外，所有算术运算符都可用于`BigInt`
10n + 20n;    // → 30n
10n - 20n;    // → -10n
+10n;         // → TypeError: Cannot convert a BigInt value to a number
-10n;         // → -10n
10n * 20n;    // → 200n
20n / 10n;    // → 2n
23n % 10n;    // → 3n
10n ** 3n;    // → 1000n

const x = 10n;
++x;          // → 11n
--x;          // → 9n
 */

// BigInt文字也可以用二进制、八进制或十六进制表示
// binary
console.log(0b100000000000000000000000000000000000000000000000000011n);
// → 9007199254740995n
// hex
console.log(0x20000000000003n);
// → 9007199254740995n
// octal
console.log(0o400000000000000003n);
// → 9007199254740995n
// note that legacy octal syntax is not supported
// console.log(0400000000000000003n);
// → SyntaxError