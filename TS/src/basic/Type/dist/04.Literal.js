{
    var str = 'this is string';
    var num = 1;
    var bool = true;
}
{
    var str = 'this is string';
    var num = 1;
    var bool = true;
}
/* 看着上面的示例，可能你在 02 讲中已经嘀咕了：定义基础类型的变量都需要写明类型注解，TypeScript 太麻烦了吧？在示例中，使用 let 定义变量时，我们写明类型注解也就罢了，毕竟值可能会被改变。可是，使用 const 常量时还需要写明类型注解，那可真的很麻烦。
实际上，TypeScript 早就考虑到了这么简单而明显的问题。
在很多情况下，TypeScript 会根据上下文环境自动推断出变量的类型，无须我们再写明类型注解。因此，上面的示例可以简化为如下所示内容： */
{
    var str = 'this is string'; // 等价
    var num = 1; // 等价
    var bool = true; // 等价
}
{
    var str = 'this is string'; // 不等价
    var num = 1; // 不等价
    var bool = true; // 不等价
}
{
    function move(dir) {
        // ...
    }
    move('up'); // ok
    move('right'); // ts(2345) Argument of type '"right"' is not assignable to parameter of type 'Direction'
}
