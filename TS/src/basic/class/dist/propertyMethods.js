{
    var Greeter = /** @class */ (function () {
        // 构造函数 - 执行初始化操作
        function Greeter(message) {
            this.greeting = message;
        }
        // 静态方法
        Greeter.getClassName = function () {
            return "Class name is Greeter";
        };
        // 成员方法
        Greeter.prototype.greet = function () {
            return "Hello, " + this.greeting;
        };
        // 静态属性
        Greeter.cname = "Greeter";
        return Greeter;
    }());
    var greeter = new Greeter("world");
    console.log(greeter.greeting);
}
