/**16 */
// function SuperType(){
//     this.friends=["gay1","gay2"];
// }
// function SubType(){
// }
// SubType.prototype=new SuperType();
// var instance1=new SubType();
// var instance1.friends.push("gay3");
// alert(instance1.friends);
// var instance2=new SubType();
// alert(instance2.friends);  
// alert(instance1 instanceof SuperType);  //true
// //gay1,gay2,gay3 这个实例里为什么会有gay3 可以简单解释为 SuperType中的friends是instance1和instance2所在的作用域链共享的
//==================
//构造函数无参数
/*
function SuperType() {
    this.friends = ["gay1", "gay2"];
}
SubType.prototype = new SuperType(); //继承
function SubType() {
    SuperType.call(this); //这样实现了继承 与上段代码的继承方式有什么不同?
}
var instance1 = new SubType();
var instance2 = new SubType();
instance1.friends.push("gay3");
console.log(instance1.friends); //gay1,gay2,gay3
console.log(instance2.friends); //gay1,gay2
*/
//-----------------------------邪恶的分割线-------------------------//
//构造函数有参数

function SuperType(name) {
    this.name = name;
}

function SubType(name) {
    SuperType.call(this, name); //等同于SuperType.apply(this,[name]) 或 SuperType.apply(this,arguments)
}
var instance1 = new SubType("nUll");
var instance2 = new SubType("mywei");
console.log(instance1.name); //nUll
console.log(instance2.name); //mywei
console.log(instance1 instanceof SuperType); //false