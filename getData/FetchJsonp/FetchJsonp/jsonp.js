// import jsonp from 'jsonp'
const jsonp = require('jsonp')

const reqWeather = (cityid) => {
  return new Promise((resolve,reject) => {
    const url = `http://api.k780.com/?app=weather.today&weaid=${cityid}&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json`
    jsonp(url, {}, (err,data) => {
      console.log(data);
    })
  })
}

reqWeather(2)