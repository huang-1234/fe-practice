"use strict";

function getWeather() {
  var urlWeather = "http://api.k780.com/?app=weather.today&weaid=2&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json";
  var xhr = new XMLHttpRequest(); // const {status}

  xhr.onreadystatechange = function () {
    console.log(xhr.status);

    if (xhr.status >= 200 && xhr.status < 300 || 304 == xhr.status) {
      console.log(xhr.responseText);
    } else {
      console.log('chucuole');
    }
  };

  xhr.open('get', urlWeather, false);
  xhr.send(); // let header = xhr.getResponseHeader();
  // console.log(header);
}

getWeather();