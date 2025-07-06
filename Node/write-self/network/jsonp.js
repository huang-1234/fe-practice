const { stringify } = require('../url/generate');
const jsonp = ({ url, params, callbackName }) => {
  const dataSrc = `${url}?${stringify(params)}&callback=${callbackName}`
  return new Promise((resolve, reject) => {
    const scriptEle = document.createElement('script')
    scriptEle.src = dataSrc;
    document.body.appendChild(scriptEle)
    window[callbackName] = data => {
      resolve(data)
      document.removeChild(scriptEle)
    }
  })
}

module.exports = {
  jsonp,
}