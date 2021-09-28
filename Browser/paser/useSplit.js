
function getRequest() {

  const url = `https://example.com:4000/folder/page.html?x=y&a=b&name=huangsq&name=huang&age=21#section-2`

  const [originStr, searchHashStr] = url.split('?')

  const [searchStr, hashStr] = searchHashStr.split('#')

  let queryArr = searchStr.split('&');
  console.log(queryArr);
  let queryObj = {};
  queryArr.forEach((item) => {
    // const [key, value] = item.split('=');
    // queryObj[key] = unescape(value);
    if (queryObj[item.split(`=`)[0]]) {

    } else {
      queryObj[item.split(`=`)[0]] = item.split('=')[1];
    }
  })
  console.log(queryObj);

}

getRequest()


/* {
  function GetRequest() {
    var url = `?x=y&a=b&name=huangsq&age=21` //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
  }
  var Request = new Object();
  Request = GetRequest();
  console.log(Request)
} */