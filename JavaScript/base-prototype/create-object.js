function Employee(){};  
function Coder(){};  
Coder.prototype = new Employee();  
// Coder.prototype.constructor = Coder;  
let coder = new Coder();
console.log(coder);
console.log(coder instanceof Coder);
console.log(Coder.prototype.isPrototypeOf(coder));