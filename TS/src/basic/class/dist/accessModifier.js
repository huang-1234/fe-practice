var MyMath = /** @class */ (function () {
    function MyMath() {
    }
    MyMath.sayHi = function () {
        console.log('hello world');
    };
    MyMath.PI = 3.14159265358979343846;
    MyMath.E = 2.718281828;
    MyMath.LN2 = 0.693; // 2 的自然对数，约等于 0.693。
    MyMath.SQRT1_2 = 0.707; // 二分之一 ½ 的平方根，同时也是 2 的平方根的倒数 12，约等于 0.707。
    return MyMath;
}());
var p = new MyMath();
console.log(Math.PI);
