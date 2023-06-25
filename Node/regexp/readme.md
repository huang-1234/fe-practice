# regExp

## 匹配位置

- `^` 、`$`、 `\b`、 `\B`、 `(?=p)`、 `(?!p)`

在ES5中，共有6个锚字符：^ $ \b \B (?=p) (?!p)2.1 ^和$^（脱字符）匹配开头，在多行匹配中匹配行开头。$（美元符号）匹配结尾，在多行匹配中匹配行结尾。比如我们把字符串的开头和结尾用"#"替换（位置可以替换成字符的！）：

```ts
var result = "hello".replace(/^|$/g, '#');
console.log(result);
// => "#hello#"
```

多行匹配模式时，二者是行的概念，这个需要我们的注意

```ts
var result = "I\nlove\njavascript".replace(/^|$/gm, '#');
console.log(result);
/*
#I#
#love#
#javascript#
*/
```
