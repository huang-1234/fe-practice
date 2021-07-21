/* 枚举类型
在 JavaScript 原生语言中并没有与枚举匹配的概念，而 TypeScript 中实现了枚举类型（Enums），这就意味着枚举也是 TypeScript 特有的语法（相对于 JavaScript）。
在 TypeScript 中，我们可以使用枚举定义包含被命名的常量的集合，比如 TypeScript 支持数字、字符两种常量值的枚举类型。
我们也可以使用 enum 关键字定义枚举类型，格式是 enum + 枚举名字 + 一对花括弧，花括弧里则是被命名了的常量成员。 */
{
    var Day2 = void 0;
    (function (Day2) {
        Day2[Day2["SUNDAY"] = 0] = "SUNDAY";
        Day2[Day2["MONDAY"] = 1] = "MONDAY";
        Day2[Day2["TUESDAY"] = 2] = "TUESDAY";
        Day2[Day2["WEDNESDAY"] = 3] = "WEDNESDAY";
        Day2[Day2["THURSDAY"] = 4] = "THURSDAY";
        Day2[Day2["FRIDAY"] = 5] = "FRIDAY";
        Day2[Day2["SATURDAY"] = 6] = "SATURDAY";
    })(Day2 || (Day2 = {}));
    /* JavaScript 中其实并没有与枚举类型对应的原始实现，而 TypeScript 转译器会把枚举类型转译为一个属性为常量、命名值从 0 开始递增数字映射的对象，在功能层面达到与枚举一致的效果（然而不是所有的特性在 JavaScript 中都有对应的实现）。
    下面我们通过如下所示示例看看将如上示例转译为 JavaScript 后的效果。 */
    {
        var Day = void 0;
        (function (Day) {
            Day[Day["SUNDAY"] = 0] = "SUNDAY";
            Day[Day["MONDAY"] = 1] = "MONDAY";
            Day[Day["TUESDAY"] = 2] = "TUESDAY";
            Day[Day["WEDNESDAY"] = 3] = "WEDNESDAY";
            Day[Day["THURSDAY"] = 4] = "THURSDAY";
            Day[Day["FRIDAY"] = 5] = "FRIDAY";
            Day[Day["SATURDAY"] = 6] = "SATURDAY";
        })(Day || (Day = {}));
    }
    /* 在 TypeScript 中，我们可以通过“枚举名字.常量命名”的格式获取枚举集合里的成员，如下代码所示： */
    {
        var Day = void 0;
        (function (Day) {
            Day[Day["SUNDAY"] = 0] = "SUNDAY";
            Day[Day["MONDAY"] = 1] = "MONDAY";
            Day[Day["TUESDAY"] = 2] = "TUESDAY";
            Day[Day["WEDNESDAY"] = 3] = "WEDNESDAY";
            Day[Day["THURSDAY"] = 4] = "THURSDAY";
            Day[Day["FRIDAY"] = 5] = "FRIDAY";
            Day[Day["SATURDAY"] = 6] = "SATURDAY";
        })(Day || (Day = {}));
        function work(d) {
            switch (d) {
                case Day.SUNDAY:
                case Day.SATURDAY:
                    return 'take a rest';
                case Day.MONDAY:
                case Day.TUESDAY:
                case Day.WEDNESDAY:
                case Day.THURSDAY:
                case Day.FRIDAY:
                    return 'work hard';
            }
        }
        console.log(work(Day.SATURDAY)); // take a rest
        console.log(work(5)); // work hard
        console.log(work(8)); // undefined
    }
    /* 字符串枚举
    在 TypeScript 中，我们将定义值是字符串字面量的枚举称之为字符串枚举，
    字符串枚举转译为 JavaScript 之后也将保持这些值，我们来看下如下所示示例： */
    {
        var isLogin = void 0;
        (function (isLogin) {
            isLogin["LOGIN_SUCEESS"] = "LOGIN_SUCEESS";
            isLogin["LOGIN_FIALED"] = "LOGIN_FIALED";
        })(isLogin || (isLogin = {}));
    }
}
