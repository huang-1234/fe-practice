//=>合并并且压缩CSS
let {readFile, readdir, writeFile} = require('./utils/fsPromise');//引入要使用的方法

//1.先把所有的CSS文件读取出来
readdir('less').then(result => {//获取less文件下的css文件
    return result.filter(item => /\.CSS$/i.test(item));
}).then(result => {//读取less文件下的css文件内容
    let arg = [];
    result.forEach(item => {
        arg.push(readFile(`less/${item}`));//=>分别调取READ-FILE方法，读取捕捉到的CSS文件，向数组中依次增加读取各个文件的PROMISE实例
    });
    //arg=[promise1,promise2...]  Promise.all：等待数组中所有的PROMISE实例都执行成功才算成功
    return Promise.all(arg);
}).then(result => {//把读取的每个文件的内容进行拼接
    //=>RESULT:一个数组，存放所有文件读取的内容
    result = result.join('');
    return result.replace(/( |\n|\r)/g, '');
}).then(result => {//写入一个新的文件中（没有的话会自动创建这个文件）
    return writeFile('less/build.min.css', result);
}).then(() => {
    console.log('创建成功');
});
