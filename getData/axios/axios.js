import axios from 'axios'

const getData = function (url) {
  const ax = axios({
    method:'get',
    url,
    header: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      "Accept":"application/json"
    }
  }).then((res) => {
    console.log('res:',res)
  }).catch((err) => {
    console.log('err:',err);
  })
}

const urlWeather = `http://api.k780.com/?app=weather.today&weaid=2&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json`
getData(urlWeather);