

function getJSfromJSON(jsonString) {
  let jsObj = JSON.parse(jsonString)
  console.log(jsObj)
}


function getWeather(cityid) {
  
  const urlWeather = `http://api.k780.com/?app=weather.today&weaid=${cityid}&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json`
  let xhr = new XMLHttpRequest()
  // const {status}
  console.log('onready0之前：', xhr.readyState);
  // 一旦XMLHttpRequest实例的状态发生变化，就会调用监听函数handleStateChange
   let bool1 = false; bool2 = true;
   xhr.open('get', urlWeather, bool2);
  xhr.onreadystatechange = () => { // 异步回调hanshu
    // if (xhr.readyState == 2) {
    //   console.log('middle:',xhr.readyState);
    // }
    console.log('onready1:----------', xhr.readyState); // 1
    if (xhr.readyState == 3) { // 没输出
      console.log('middle3:',xhr.readyState);
    }
    if (xhr.readyState === 4) {
      console.log('httpStatus:----------',xhr.status);
      if (xhr.status >= 200 && xhr.status < 300 || 304 === xhr.status) {
        // xhr.abort(); // 终止 XMLHttpRequest 请求，也会造成readyState属性变化，

        console.log('responseText:----------', xhr.responseText);
        getJSfromJSON(xhr.responseText);
        console.log('response:----------', xhr.response);
        getJSfromJSON(xhr.response)
        // console.log('xhr:',xhr);
        return xhr.responseText;
      }
      else {
        console.log('chucuole');
      }
    }
  }
  console.log('cbzhiqian');


  // xhr.withCredentials = true; // 加上这句代码会报错：from origin 'null' has been blocked by CORS policy: The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'. The credentials mode of requests initiated by the XMLHttpRequest is controlled by the withCredentials attribute.
  // 下面两行代码没结果
  // xhr.responseType = 'document';
  // xhr.overrideMimeType('text/xml'); 
  xhr.send();
  
}
const weatherData = getWeather(2)
console.log(weatherData);