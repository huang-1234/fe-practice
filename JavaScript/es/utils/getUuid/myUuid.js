
class MyUuid{

  constructor() {

  }

  getUuid(len=32,radix = 36) {
    const letter = `abcdefghijklmnopqrstuvwxyz`
    const digit = `1234567890`
    const chars = digit + letter + letter.toUpperCase();
    const uuid = [];
    if(6>=len || len>=64){
      throw new Error(`the length of uuid must be from 6 to 64`)
    }
    for (let i = 0;i < len;i++){
      uuid.push(chars[0 | Math.random() * radix]) // 0 的作用是去掉小数部分
    }
    return uuid.join('')
  }
}

const uuid1 = new MyUuid(' ',32)
console.log(uuid1.getUuid());
const uuid2 = new MyUuid
console.log(uuid2.getUuid());

