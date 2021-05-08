import axios from "axios";

function getPic(url) {
  console.log('start axios');
  return axios.get(url)
    .then((res) => {
      console.log('get Response:');
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
}

const url = `https://image.baidu.com/`
getPic(url)