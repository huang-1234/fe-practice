function render(template, data) {
  const reg = /\{\{(\w+)\}\}/; // 模板字符串正则
  if (reg.test(template)) { // 判断模板里是否有模板字符串
    const name = reg.exec(template)[1]; // 查找当前模板里第一个模板字符串的字段
    console.log('name', name, reg.exec(template))
    template = template.replace(reg, data[name]); // 将第一个模板字符串渲染
    return render(template, data); // 递归的渲染并返回渲染后的结构
  }
  return template; // 如果模板没有模板字符串直接返回
}


module.exports = {
  render
}

let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let person = {
    name: 'huangsq',
    age: 12
}
console.log(render(template, person)) // 我是布兰，年龄12，性别undefined
