
// 联合类型
interface Dog {
  wong();
}

// interface 可以而 type 不行
// interface 能够声明合并
interface  UserInfo {
  name: string
  age: number
}

interface  UserInfo {
  sex: string
}

const u2 = {
  name: 'huangsq',
  age: 18,
  // sex: 'male'
};
(function showUserinfo(user:  UserInfo) {
  console.log(user)
})(u2)

/*
 UserInfo 接口为 {
  name: string
  age: number
  sex: string 
}
*/
