function isValidKuoHao(str){
  if(str.length%2!=0) return false;//如果是奇数就不可能是合法的字符串
  let stack = [];
  let map = new Map();
  map.set('(',')');
  map.set('[',']');
  map.set('{','}');
  for(let i=0;i<str.length;i++){
      if(map.has(str[i])){
          stack.push(str[i])
      }else{
        let target = stack.pop();
        if (str[i] != map.get(target)) {
          return false
        }
      }
  }
  return true;
}
console.log(isValidKuoHao("()"));
console.log(isValidKuoHao("()[]{}"));
console.log(isValidKuoHao("(]"));
console.log(isValidKuoHao("([)]"));
console.log(isValidKuoHao("{[]}"));