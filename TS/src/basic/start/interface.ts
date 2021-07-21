interface Boy{
  name: string,
  age: number,
  height:number,
}

const screenResume = function (Boy: Boy){
  Boy.age < 24 && Boy.height >= 170 && console.log(Boy.name + "进入面试");
  
  Boy.ancestral_home && console.log(Boy.name + "祖籍是：" + Boy.ancestral_home);
  Boy.age > 24 || (Boy.height < 170 && console.log(Boy.name + "你被淘汰"));
  Boy.recommend && console.log(Boy.recommend())
}

const boy1 = {
  name: '易烊千玺',
  age: 21,
  height:180,
}
// screenResume(boy1)

interface Boy{
  name: string,
  age: number,
  height: number,
  ancestral_home?: string,
  recommend?():string,
}

const boy2 = {
  name: '易烊千玺',
  age: 21,
  height: 180,
  ancestral_home: 'changsha',
  recommend: function () {
    return(`hello i am ${this.name}`)
  }
}
screenResume(boy2)