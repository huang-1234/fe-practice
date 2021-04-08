
function handleResponse(response) {
  
  console.log(response);
}
let script = document.createElement('script');
const url = `http://freegeoip.net/json/?callback=handleResponse`
script.src = url;
document.body.insertBefore(script, document.body.firstChild);