var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* 存取器
除了上边提到的修饰符之外，在 TypeScript 中还可以通过getter、setter截取对类成员的读写访问。
通过对类属性访问的截取，我们可以实现一些特定的访问控制逻辑。下面我们把之前的示例改造一下，如下代码所示： */
{
    var Son = /** @class */ (function () {
        function Son(firstName) {
            this.lastName = 'Stark';
            this.firstName = firstName;
        }
        return Son;
    }());
    var GrandSon = /** @class */ (function (_super) {
        __extends(GrandSon, _super);
        function GrandSon(firstName) {
            return _super.call(this, firstName) || this;
        }
        Object.defineProperty(GrandSon.prototype, "myLastName", {
            get: function () {
                return this.lastName;
            },
            set: function (name) {
                if (this.firstName === 'Tony') {
                    this.lastName = name;
                }
                else {
                    console.error('Unable to change myLastName');
                }
            },
            enumerable: false,
            configurable: true
        });
        return GrandSon;
    }(Son));
    var grandSon = new GrandSon('Tony');
    console.log(grandSon.myLastName); // => "Stark"
    grandSon.myLastName = 'Rogers';
    console.log(grandSon.myLastName); // => "Rogers"
    var grandSon1 = new GrandSon('Tony1');
    grandSon1.myLastName = 'Rogers'; // => "Unable to change myLastName"
}
/* 索引签名
在实际工作中，使用接口类型较多的地方是对象，比如 React 组件的 Props & State、HTMLElement 的 Props，这些对象有一个共性，
即所有的属性名、方法名都确定。实际上，我们经常会把对象当 Map 映射使用，比如下边代码示例中定义了索引是任意数字的对象
 LanguageRankMap 和索引是任意字符串的对象 LanguageMap。 */
{
    var LanguageRankMap = {
        1: 'TypeScript',
        2: 'JavaScript'
    };
    var LanguageMap = {
        TypeScript: 2012,
        JavaScript: 1995
    };
    /* 这个时候，我们需要使用索引签名来定义上边提到的对象映射结构，并通过 “[索引名: 类型]”的格式约束索引的类型。
    索引名称的类型分为 string 和 number 两种，通过如下定义的 LanguageRankInterface 和 LanguageYearInterface 两个接口，
    我们可以用来描述索引是任意数字或任意字符串的对象。 */
    {
        {
            var LanguageRankMap_1 = {
                1: 'TypeScript',
                2: 'JavaScript',
                4: 'react',
                6: 'vue',
                'WrongINdex': '2012' // ts(2322) 不存在的属性名
            };
            var LanguageRankType = {
                1: 'TypeScript',
                2: 'JavaScript',
                4: 'react',
                6: 'vue',
                'WrongINdex': '2012' // ts(2322) 不存在的属性名
            };
            var LanguageMap_1 = {
                TypeScript: 2012,
                JavaScript: 1995,
                1: 1970 // ok
            };
        }
    }
}
