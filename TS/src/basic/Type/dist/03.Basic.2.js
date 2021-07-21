var _a, _b;
{
    var arrayOfNumber = ["x", "y", "z"]; // 提示 ts(2322)
    arrayOfNumber[3] = "a"; // 提示 ts(2322)
    arrayOfNumber.push("b"); // 提示 ts(2345)
    var arrayOfString = [1, 2, 3]; // 提示 ts(2322)
    arrayOfString[3] = 1; // 提示 ts(2322)
    arrayOfString.push(2); // 提示 ts(2345)
}
/* 元组类型（Tuple）
元组最重要的特性是可以限制数组元素的个数和类型，它特别适合用来实现多值返回。
我们熟知的一个使用元组的场景是 React Hooks（关于 React Hooks 的简介请点击这里查看），例如 useState 示例：
 */
{
    /* 特殊类型
    1. any
    any 指的是一个任意类型，它是官方提供的一个选择性绕过静态类型检测的作弊方式。
    我们可以对被注解为 any 类型的变量进行任何操作，包括获取事实上并不存在的属性、方法，并且 TypeScript 还无法检测其属性是否存在、类型是否正确。
    比如我们可以把任何类型的值赋值给 any 类型的变量，也可以把 any 类型的值赋值给任意类型（除 never 以外）的变量，如下代码所示：
    */
    var anything = {};
    anything.doAnything(); // 不会提示错误
    anything = 1; // 不会提示错误
    anything = "x"; // 不会提示错误
    var num = anything; // 不会提示错误
    var str21 = anything; // 不会提示错误
}
{
    /* 2. unknown
    unknown 是 TypeScript 3.0 中添加的一个类型，它主要用来描述类型并不确定的变量。
    比如在多个 if else 条件分支场景下，它可以用来接收不同条件下类型各异的返回值的临时变量，如下代码所示：
    */
    var result = void 0;
    var x031 = function () {
        console.log("x031");
    }, y031 = function () {
        console.log("y031");
    };
    if (x031) {
        result = x031();
    }
    else if (y031) {
        result = y031();
    }
    // 与 any 不同的是，unknown 在类型上更安全。比如我们可以将任意类型的值赋值给 unknown，
    // 但 unknown 类型的值只能赋值给 unknown 或 any
}
{
    /*3. void、undefined、null
    考虑再三，我们还是决定把 void、undefined 和 null “三废柴”特殊类型整合到一起介绍。
    依照官方的说法，它们实际上并没有太大的用处，尤其是在本专栏中强烈推荐并要求的 strict 模式下，它们是名副其实的“废柴”。
    首先我们来说一下 void 类型，它仅适用于表示没有返回值的函数。即如果该函数没有返回值，那它的类型就是 void。 */
    var undeclared31 = undefined; // 鸡肋
    var nullable = null; // 鸡肋
    /* undefined 的最大价值主要体现在接口类型（第 7 讲会涉及）上，它表示一个可缺省、未定义的属性。
    这里分享一个稍微有点费解的设计：我们可以把 undefined 值或类型是 undefined 的变量赋值给 void 类型变量，
    反过来，类型是 void 但值是 undefined 的变量不能赋值给 undefined 类型。*/
    var userInfo31 = {};
    var undeclared32 = undefined;
    var unusable = undefined;
    unusable = undeclared32; // ok
    undeclared32 = unusable; // ts(2322)
    /* 而 null 的价值我认为主要体现在接口制定上，它表明对象或属性可能是空值。尤其是在前后端交互的接口，
    比如 Java Restful、Graphql，任何涉及查询的属性、对象都可能是 null 空对象，如下代码所示： */
    var userInfo32 = { name: null };
}
{
    /* 我们需要类型守卫（Type Guard，第 11 讲会专门讲解）在操作之前判断值的类型是否支持当前的操作。
    类型守卫既能通过类型缩小影响 TypeScript 的类型检测，也能保障 JavaScript 运行时的安全性，如下代码所示： */
    var userInfo33 = {
        id: 1,
        name: "Captain"
    };
    if (userInfo33.id !== undefined) {
        // Type Guard
        userInfo33.id.toFixed(); // id 的类型缩小成 number
    }
    /* 我们不建议随意使用非空断言（下面要讲的“类型断言”中会详细介绍非空断言）
    来排除值可能为 null 或 undefined 的情况，因为这样很不安全。 */
    userInfo33.id.toFixed(); // ok，但不建议
    userInfo33.name.toLowerCase(); // ok，但不建议
    /* 而比非空断言更安全、类型守卫更方便的做法是使用单问号（Optional Chain）、双问号（空值合并），
    我们可以使用它们来保障代码的安全性，如下代码所示： */
    (_a = userInfo33.id) === null || _a === void 0 ? void 0 : _a.toFixed(); // Optional Chain
    var myName = (_b = userInfo33.name) !== null && _b !== void 0 ? _b : "my name is " + userInfo33.name; // 空值合并
}
/* 4. never
never 表示永远不会发生值的类型，这里我们举一个实际的场景进行说明。
首先，我们定义一个统一抛出错误的函数，代码示例如下（圆括号后 : + 类型注解 表示函数返回值的类型 */
// 取一个对象上不存在的属性将会报错，但是在js中却不会报错
{
    function ThrowError(msg) {
        throw Error(msg);
    }
    var obj33 = {
        name: "huangsq",
        age: 18
    };
    if (obj33.sex === "male") {
        console.log("i am " + obj33.sex);
    }
}
{
    /* never 是所有类型的子类型，它可以给所有类型赋值，如下代码所示。 */
    var Unreachable = 1; // ts(2322)
    Unreachable = "string"; // ts(2322)
    Unreachable = true; // ts(2322)
    var num = Unreachable; // ok
    var str = Unreachable; // ok
    var bool = Unreachable; // ok
}
{
    /* 但是反过来，除了 never 自身以外，其他类型（包括 any 在内的类型）都不能为 never 类型赋值。
    在恒为 false 的类型守卫条件判断下，变量的类型将缩小为 never（never 是所有其他类型的子类型，所以是类型缩小为 never，而不是变成 never）。因此，条件判断中的相关操作始终会报无法更正的错误（我们可以把这理解为一种基于静态类型检测的 Dead Code 检测机制），如下代码所示： */
    // 这里看不懂了
    var str = "string";
    if (typeof str === "number") {
        str.toLowerCase(); // Property 'toLowerCase' does not exist on type 'never'.ts(2339)
    }
    /* 基于 never 的特性，我们还可以使用 never 实现一些有意思的功能。比如我们可以把 never 作为接口类型下的属性类型，
    用来禁止写接口下特定的属性，示例代码如下： */
    var props = {
        id: 1
    };
    props.name = null; // ts(2322))
    props.name = "str"; // ts(2322)
    props.name = 1; // ts(2322)
}
/* 5. object
object 类型表示非原始类型的类型，即非 number、string、boolean、bigint、symbol、null、undefined 的类型。然而，它也是个没有什么用武之地的类型，如下所示的一个应用场景是用来表示 Object.create 的类型。 */
{
    create({}); // ok
    create(function () { return null; }); // ok
    create(null); // ok
    create(2); // ts(2345)
    create("string"); // ts(2345)
}
{
    /* 类型断言（Type Assertion）
    TypeScript 类型检测无法做到绝对智能，毕竟程序不能像人一样思考。有时会碰到我们比 TypeScript 更清楚实际类型的情况，比如下面的例子： */
    var arrayNumber11 = [1, 2, 3, 4];
    var greaterThan12 = arrayNumber11.find(function (num) { return num > 2; }); // 提示 ts(2322)
    console.log(greaterThan12);
    var arrayNumber21 = [1, 2, 3, 4];
    var greaterThan22 = arrayNumber21.find(function (num) { return num > 2; });
    console.log(greaterThan22);
}
