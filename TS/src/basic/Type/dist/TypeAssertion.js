"use strict";
exports.__esModule = true;
// Type Assertion
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
{
    var strArr = ['antd', 'reatc', 'vue', 'huang'];
    var ConstantStr = 'str';
    ConstantStr = 'huangsq';
}
