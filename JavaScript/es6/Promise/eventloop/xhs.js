const list = [];

setTimeout(() => {
  list.push(1);
  console.log(list);
}, 0);

new Promise((resolve, reject) => {
  list.push(2);
  resolve(-1);
}).then(res => {
  list.push(3);
}).then(res => {
  list.push(4);
  console.log(list);
});

list.push(5);
console.log(list);

// xhs ken

