/* parseInt
parseInt(string, radix)   解析一个字符串并返回指定基数的十进制整数， radix 是2-36之间的整数，表示被解析字符串的基数。 */
/* string
要被解析的值。如果参数不是一个字符串，则将其转换为字符串(使用  ToString 抽象操作)。字符串开头的空白符将会被忽略。
radix 可选
从 2 到 36，表示字符串的基数。例如指定 16 表示被解析值是十六进制数。请注意，10不是默认值！ */

/*  如果 radix 是 undefined、0或未指定的，JavaScript会假定以下情况：

如果输入的 string以 "0x"或 "0x"（一个0，后面是小写或大写的X）开头，那么radix被假定为16，字符串的其余部分被当做十六进制数去解析。
如果输入的 string以 "0"（0）开头， radix被假定为8（八进制）或10（十进制）。具体选择哪一个radix取决于实现。ECMAScript 5 澄清了应该使用 10 (十进制)，但不是所有的浏览器都支持。因此，在使用 parseInt 时，一定要指定一个 radix。
如果输入的 string 以任何其他值开头， radix 是 10 (十进制)。*/
/*
{
  // 以下例子均返回15:
  parseInt("0xF", 16);
  parseInt("F", 16);
  parseInt("17", 8);
  parseInt(021, 8);
  parseInt("015", 10);   // parseInt(015, 8); 返回 13
  parseInt(15.99, 10);
  parseInt("15,123", 10);
  parseInt("FXX123", 16);
  parseInt("1111", 2);
  parseInt("15 * 3", 10);
  parseInt("15e2", 10);
  parseInt("15px", 10);
  parseInt("12", 13);
  // 以下例子均返回 NaN:
  parseInt("Hello", 8); // 根本就不是数值
  parseInt("546", 2);   // 除了“0、1”外，其它数字都不是有效二进制数字
  // 以下例子均返回 -15：
  parseInt("-F", 16);
  parseInt("-0F", 16);
  parseInt("-0XF", 16);
  parseInt(-15.1, 10);
  parseInt(" -17", 8);
  parseInt(" -15", 10);
  parseInt("-1111", 2);
  parseInt("-15e1", 10);
  parseInt("-12", 13);
  // 下例中全部返回 4:
  parseInt(4.7, 10);
  parseInt(4.7 * 1e22, 10); // 非常大的数值变成 4
  parseInt(0.00000000000434, 10); // 非常小的数值变成 4
}
 */
{
  console.log(parseInt(0.000000000004, 16))
  console.log(Math.floor(0.00000000000434))
}
console.log(0.000000000004);