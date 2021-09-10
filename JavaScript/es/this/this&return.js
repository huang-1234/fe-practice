/*
function Person(name='huang',fullName='huangsq',age=18,sex='male') {
  this.name = name;
  this.fullName = fullName;
  this.age = age
  // return { sex:sex }
  return [1,2.3]
}

const p1 = new Person('jsHuang', 'jsHuangsq', 20, 'real male');
const p2 = new Person;
console.log(p1);  //[ 1, 2.3 ]
console.log(p2);  //[ 1, 2.3 ]
// console.log(p1);  //Person { name: 'jsHuang', fullName: 'jsHuangsq', age: 20 }
// console.log(p2);  //Person { name: 'huang', fullName: 'huangsq', age: 18 }
 */

// the this will be lost in the setTimeout function
/*
{
  var param = 'global param';
  function fn() {
    console.log(this.param);
  }
  // fn()
  setTimeout(fn, 2000)
}
 */

{
  var test = {
    a: 40,
    init: () => {
      console.log(this.a);
      function go() {
        console.log('this of go',this);
        console.log(this.a);
      }
      go.prototype.a = 50;
      return go;
    }
  };

  var p = test.init();
  p();
}