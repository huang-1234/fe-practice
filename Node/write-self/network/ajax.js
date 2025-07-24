function get(url) {
  let xhr = new XMLHttpRequest() //1、创建连接
  xhr.open('GET', url, true) //2、连接服务器
  xhr.onreadystatechange = function () { //4、接收请求，当状态改变时触发这个函数
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {//xhr.responseText是字符串需转换为JSON
        success(JSON.parse(xhr.responseText))
      } else {
        fail(xhr.status)
      }
    }
  }
  xhr.send(null) //3、发送请求
}

function post() {
  let xhr = new XMLHttpRequest() //1、创建连接
  const postData = {
    userName: 'huangsq',
    passWord: 'xxx'
  }
  xhr.open('POST', url, true) //2、连接服务器
  xhr.onreadystatechange = function () { //4、接收请求，当状态改变时触发这个函数
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {//xhr.responseText是字符串需转换为JSON
        success(JSON.parse(xhr.responseText))
      } else {
        fail(xhr.status)
      }
    }
  }
  xhr.send(JSON.stringify(postData)) //3、发送请求(需发送字符串，将json转化成字符串)

}

function ajax(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest() //1、创建连接
    xhr.open('GET', url, true) //2、连接服务器
    xhr.onreadystatechange = function () { //4、接收请求，当状态改变时触发这个函数
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {//xhr.responseText是字符串需转换为JSON
          resolve(JSON.parse(xhr.responseText))
        } else if (xhr.status === 404) {
          reject(new Error('404'))
        }
      }
    }
    xhr.send(null) //3、发送请求
  })
}
const url = `https://buyin.jinritemai.com/pc/diagnose/get_product_detail?product_id=3407888174184273877&msToken=5C-VZHmBPtsF5zt6epeWFPT_KPef5D5n_NJG6vc6EM8fDFXZAUo7hgHesTT48LPSz-nCi70Teqz2YoOmT29MWbZdaapbqFC1090Xi5a3I0HZPY6wcZ3v_4eny0tlnnY=&X-Bogus=DFSzswVLt-xANaMltnVG55KMtakg&_signature=_02B4Z6wo00001BXu-cQAAIDB66KF9Ro5NVwV7v1AAGHnHkufy5jsBRXn..YVghfSozMOEW5qZEn1CPaGQZUmDPc40jU9e-mRaTNTTI.Zmmtaw5bUcmxzG1zNKQt04qZL6tAcd-HgPXoypQdX0e`
ajax(url)
  .then(res => console.log(JSON.parse(xhr.responseText)))
  .catch(err => console.log(err))
