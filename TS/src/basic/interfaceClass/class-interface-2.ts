

interface Human{
  name: string;
  age: number;
  eat(): void;
}
interface Child{
  cry(): void;
}
interface Boy extends Human, Child{

}

class Auto{
  stateNum :number;
  private stateStr :string
}
interface AutoInterface extends Auto{

}
class AotuC implements AutoInterface{
  stateNum:number
  private stateStr:'huangsq'
}

class Boy implements Boy{
  name: string;
  age: number;
  constructor(name: string,age:number) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log('are you eating?')
  }
  run() {
    console.log('run quickly')
  }
}