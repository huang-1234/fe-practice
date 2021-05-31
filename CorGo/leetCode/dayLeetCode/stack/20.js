
function isValid(s) {
  const stack = new Array();
  paren_map = { ')': '(', ']': '[', '}': '{' };
  //  console.log(paren_map);
  for (value of s) {
    //  console.log("paren_map[value]<< ", paren_map[value]);
    if (!paren_map[value]) {
      stack.push(value);
      //  console.log("stack<< ", stack);
    }
    else if (!stack || stack.pop() != paren_map[value]) {
      return false;
    }
  }
  // console.log(!stack)
  return !stack.length;
}


function findKlarge() {
  
}
function main(){

  const s = "()[]{}";
  console.log(isValid(s));

}