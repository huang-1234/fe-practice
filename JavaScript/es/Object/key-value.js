
{
  `
  obj1 = {};
  obj1[1] = 'huangsq';
  obj1['age'] = 18;
  // console.log('遍历对象的key');

  // for (let index in obj1) {
  //   console.log(index,':',obj1[index]);
  // }
  // console.log('遍历对象的value');
  // for (let item of obj1) {
  //   console.log(item);
  // }
  const num1 = 42;
  console.log( num1 instanceof Number);
  const Num1 = Number(42);
  console.log( Num1 instanceof Number);
  `
}

{
  const myArr = ['huang', 'sq', 'love', 'to learn', 'js']
  // myArr[1] = 14; console.log(myArr); // [ 'huang', 14, 'love', 'to learn', 'js' ]
  myArr['fullName'] = 'huangsqs';
  myArr[50]=10
  // console.log(myArr);
  for (let index in myArr) {
    // console.log(myArr[index]);
  }
  for (let item of myArr) {
    // console.log(item);
  }
}

/* toString */
{
  function sayHi(name) {
    console.log(`hello i am ${name}`);
  }

  console.log(sayHi.toString());
}