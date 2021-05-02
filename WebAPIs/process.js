
// console.log(process.argv);
process.stdout.write("请输入用户名:");
process.stdin.on('data', (input) => {
  input = input.toString().trim();
  if (!username) {
    if (Object.keys(users).indexOf(input) === -1) {
      process.stdout.write('用户名不存在' + '\n');
      process.stdout.write("请输入用户名:");
      username = "";
    }
    else {
      process.stdout.write("请输入密码:");
      username = input;
    }
  }
  //输入密码
  else {
    if (input === users[username]) {
      console.log("登陆成功");
    }
    else {
      process.stdout.write("请输入密码" + "\n");
    }

  }
});