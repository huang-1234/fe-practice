
interface Hunan{
  name: string;
  age: number;
  eat(): void;
}

class Asian implements Hunan{
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