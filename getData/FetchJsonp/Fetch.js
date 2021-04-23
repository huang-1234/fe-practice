
/* 
// fetch的promise形式使用
fetch('https://api.github.com/users/ruanyf')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log('Request Failed', err));
 */
// 上面示例中，fetch()接收到的response是一个 Stream 对象，response.json()是一个异步操作，取出所有内容，并将其转为 JSON 对象。
/* 
// Promise 可以使用 await 语法改写，使得语义更清晰。
async function getJSON() {
  let url = 'https://api.github.com/users/ruanyf';
  try {
    let response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
 */

/* //
async function fetchData(){

  const url = 'https://api.github.com/users/ruanyf';
  const response = await fetch(url);

  for (let [key, value] of response.headers) {
    console.log(`${key} : ${value}`);
  }
}
fetchData()
 */
/* 
// 2.2 判断请求是否成功
// fetch()发出请求以后，有一个很重要的注意点：只有网络错误，或者无法连接时，fetch()才会报错，
// 其他情况都不会报错，而是认为请求成功。
// 这就是说，即使服务器返回的状态码是 4xx 或 5xx，fetch()也不会报错（即 Promise 不会变为 rejected状态）。
// 只有通过Response.status属性，得到 HTTP 回应的真实状态码，才能判断请求是否成功。请看下面的例子。
const fetchText = async function (url) {
  let response = await fetch(url);
  if (response.status >= 200 && response.status < 300 || response.status === 304) {
    console.log(response.status);
    console.log(Response.statusText);
    return await response.text();
  } else {
    console.log('error');
    throw new Error(response.statusText)
  }
}
const url = 'https://api.github.com/users/ruanyf'
fetchText(url)
 */

//
// response.text()可以用于获取文本数据，比如 HTML 文件。
const getHTMLData = async function(){
  const response = await fetch('/users.html');
  const body = await response.text();
  document.body.innerHTML = body
}
getHTMLData();
