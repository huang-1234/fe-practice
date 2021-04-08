


function getWeather(cityid) {
  
  const urlWeather = `http://api.k780.com/?app=weather.today&weaid=${cityid}&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json`
  let xhr = new XMLHttpRequest()
  // const {status}
  console.log('onready之前：',xhr.readyState);
  xhr.onreadystatechange = () => {
    console.log('onready',xhr.readyState);
    if (xhr.readyState==4) {
      console.log('httpStatus',xhr.status);
      if (xhr.status >= 200 && xhr.status < 300 || 304 == xhr.status) {
      
      console.log('httpData',xhr.responseText);
      }
      else {
        console.log('chucuole');
      }
    }
  }
  
  xhr.open('get',urlWeather,false);
  xhr.send();
  // let header = xhr.getResponseHeader();
  // console.log(header);
}
getWeather(0)