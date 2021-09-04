var line;
var solveMeFirst = (a, b) => a + b;
while ((line = read_line()) != '') {
  let arr = line.split(' ');
  let a = parseInt(arr[0]);
  let b = parseInt(arr[1]);
  let c = solveMeFirst(a, b);
  print(c);
}