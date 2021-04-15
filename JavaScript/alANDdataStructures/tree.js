

// construct tree
function tree(obj) {
  var obj = obj.split(')');
  obj.pop();
  var newobj = [];
  for (var i = 0;i < obj.length;i++) {
    newobj.push(obj[i].replace('(', ''));
  }
  var root = {
    value: null, left: null, right: null, have: 0
  }
  var u;
  for (var i = 0;i < newobj.length;i++) {
    var a1 = newobj[i].split(',')[0];
    var a2 = newobj[i].split(',')[1];
    u = root;
    if (a2 !== '') {
      for (var j = 0;j < a2.length;j++) {
        if (a2[j] === 'L') {
          if (u.left === null) {
            u.left = newnode();
            u = u.left;
          } else {
            u = u.left;
          }
        } else if (a2[j] === 'R') {
          if (u.right === null) {
            u.right = newnode();
            u = u.right;
          } else {
            u = u.right;
          }
        }
      }
      if (u.have === 1) {
      } else {
        u.value = a1;
        u.have = 1;
      }
    } else {
      root.value = a1;
      u.have = 1;
    }
  }
  return root;
}

//建立新结点
function bfs() {
  var root = tree('(11,LL)(7,LLL)(8,R)(5,)(4,L)(13,RL)(2,LLR)(1,RRR)(4,RR)');
  var front = 0, rear = 1, n = 0;
  var q = [], ans = [];
  q[0] = root;
  while (front < rear) {
    var u = q[front++];
    if (u.have !== 1) {
      return;
    }
    ans[n++] = u.value;
    if (u.left !== null) {
      q[rear++] = u.left;
    }
    if (u.right !== null) {
      q[rear++] = u.right;
    }
  }
  console.log(ans.join(' '));
}
bfs();