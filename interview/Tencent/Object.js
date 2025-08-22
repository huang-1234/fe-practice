

let o = {
  name: 'hsq',
  age: 18,
  career: 'engine',
  learned: ['JS', 'HTML', 'CSS', 'React', 'Vue']
}
let length = 0;
for (index in o) {
  console.log(o[index]);
  length++;
}
console.log('length of o =======:', length);