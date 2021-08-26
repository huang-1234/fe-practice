let fs=require('fs');
let path=require('path');
let dirname = path.resolve();//存储的是当前模块执行所在的绝对路径
//单独封装示例
/*function readFile(url){
  return new Promise(function(resolve,reject){
    fs.readFile(url,'utf8',function(err,data){
      if(err){
        reject(err);
        return;
      }
      resolve(data);
    })
  })
};*/
//批量封装

//(读取类)
['mkdir', 'rmdir', 'readdir', 'readFile', 'copyFile', 'unlink'].forEach(function (item){
    exports[item] = function (pathname, copypath = '') {
        pathname = path.resolve(dirname, pathname);
        console.log(pathname)
        copypath = path.resolve(dirname, copypath);
        return new Promise(function (resolve, reject) {
            let arg = [function (err, data) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(data || '');
            }];
            item === 'readFile' ? arg.unshift('utf8') : null;
            item === 'copyFile' ? arg.unshift(copypath) : null;
            fs[item](pathname, ...arg)
        })
    }
});
//(写入类)
['writeFile', 'appendFile'].forEach(function (item) {
    exports[item] = function (pathname, content) {
        pathname = path.resolve(dirname, pathname);
        if (typeof content !== 'string') {
            content = JSON.stringify(content)
        };
        return new Promise(function (resolve, reject) {
            fs[item](pathname,content,'utf8',function(err,data){
                if (err) {
                    reject(err);
                    return;
                }
                resolve(data || '')
            })
        })
    }
})