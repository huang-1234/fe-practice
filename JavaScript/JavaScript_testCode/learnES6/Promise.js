//#region
/*
//下面是一个用Promise对象实现的 Ajax 操作的例子。
const getJSON = function (url) {
  const promise = new Promise(function(resolve, reject){
    const handler = function() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

  });

  return promise;
};

getJSON("/posts.json").then(function(json) {
  console.log('Contents: ' + json);
}, function(error) {
  console.error('出错了', error);
});
*/
//#endregion

//#region 
/*
//
const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error('fail')), 3000)
})

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(p1), 1000)
})

p2
  .then(result => console.log(result))
  .catch(error => console.log(error))
// Error: fail

getJSON("/posts.json").then(function(json) {
  return json.post;
}).then(function(post) {
  // ...
});
*/
//#endregion

// const Show = function *(x) {
//   yield x**2;
// }
// let a = Show([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// for(done = a.done)

//#region 
/*
// 用es5的方式，封装一个迭代器：##并且显示done和value属性
function createIterator(arr) {
  var i = 0;
  return {
    next: function () {
      var done = (i >= arr.length);
      var value = !done ? arr[i++] : undefined;
      return {
        done: done,
        value: value
      }
    }
  };
}

var iterator = createIterator([10, 20, 30]);
console.log(iterator.next()); // { done : false, value : 10 }
console.log(iterator.next()); // { done : false, value : 20 }
console.log(iterator.next()); // { done : false, value : 30 }
console.log(iterator.next()); // { done : true, value : undefined }
*/
//#endregion

//#region 
/*
//// 用es5的方式，封装一个迭代器：##并且显示done和value属性
function createIterator(arr) {
  let i = 0;
  return {
    next: function () {
      let done = (i >= arr.length);
      let value = !done ? arr[i++] : undefined;
      return {
        done: done,
        value: value
      }
    }
  };
}

var iterator = createIterator([10, 20, 30]);
if (iterator.next().done===true) {
  console.log('输出：',iterator.next())
}
*/
//#endregion

import nanoid from 'nanoid'
const id = nanoid();
console.log(id)