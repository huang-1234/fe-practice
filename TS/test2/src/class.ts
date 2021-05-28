/*这是的this.name就是类的内部调用。我们在下面在执行一下这个方法person.sayHello(),
终端中可以看到一切正常运行了，顺利打印出了jspang.com say Hello这句话。
在类的外部调用，我们就可以很简单的看出来了，比如下面的代码，从注释横线下，全部是类的外部。 

*/
/* 
class Person {
    private name:string;
    public sayHello(){
        console.log(this.name + 'say Hello')  //此处不报错
    }
}
//-------以下属于类的外部--------
const person = new Person()
person.name = 'jspang.com'    //此处报错
person.sayHello()
console.log(person.name)  //此处报错
 */


/*11 protected 允许在类内及继承的子类中使用
做一个例子，把name的访问属性换成protected,这时候外部调用name的代码会报错，
内部的不会报错，和private一样。这时候我们再写一个Teacher类，继承于Person,代码如下： 
*/
/* 
class Person {
    protected name:string;
    public sayHello(){
        console.log(this.name + 'say Hello')  //此处不报错
    }
}

class Teacher extends Person{
    public sayBye(){
        this.name;
    }
}
 */
/* 12.TypeScript 类的构造函数
如果你学过Java的话，对构造函数一定不陌生，构造函数就是在类被初始化的时候，自动执行的一个方法。
 */

class Boy {
  static sayHello() {
    console.log('Hello')
  }
  private _age:number
  constructor(_age: number) {
    this._age = _age;
  }
  get age() {
    console.log(this._age)
      return this._age-10
  }
  set age(age:number){
    this._age=age
  }
}

const boy1 = new Boy(28);
console.log(boy1.age)

/*类里的只读属性 readonly
这时候就可以用一个关键词readonly,也就是只读的意思，来修改Person类代码。
*/
class Person {
    public readonly _name :string;
    constructor(name:string ){
        this._name = name;
    }
}

const person = new Person('jspang')
person._name= '谢广坤'
console.log(person._name) ；


/* 

*/

/* 抽象类的使用
什么是抽象类那？我给大家举个例子，比如我开了一个红浪漫洗浴中心，里边有服务员，有初级技师，高级技师，
每一个岗位我都写成一个类，那代码就是这样的。（注释掉刚才写的代码）
 */
// class Waiter {}
// class BaseTeacher {}
// class seniorTeacher {}
// 我作为老板，我要求无论是什么职位，都要有独特的技能，比如服务员就是给顾客倒水，初级技师要求会泰式按摩，高级技师要求会 SPA 全身按摩。这是一个硬性要求，但是每个职位的技能有不同，这时候就可以用抽象类来解决问题。

// 抽象类的关键词是abstract,里边的抽象方法也是abstract开头的，现在我们就写一个Girl的抽象类。

abstract class Girl{
    abstract skill()  //因为没有具体的方法，所以我们这里不写括号

}
// 有了这个抽象类，三个类就可以继承这个类，然后会要求必须实现skill()方法，代码如下：


abstract class Girl{
    abstract skill()  //因为没有具体的方法，所以我们这里不写括号

}

class Waiter extends Girl{
    skill(){
        console.log('大爷，请喝水！')
    }
}

class BaseTeacher extends Girl{
    skill(){
        console.log('大爷，来个泰式按摩吧！')
    }
}

class seniorTeacher extends Girl{
    skill(){
        console.log('大爷，来个SPA全身按摩吧！')
    }
}
