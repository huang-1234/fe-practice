

/**
css 中经常有类似 background-image 这种通过 - 连接的字符，
通过 javascript 设置样式的时候需要将这种样式转换成 backgroundImage 驼峰格式，
请完成此转换功能
1. 以 - 为分隔符，将第二个起的非空单词首字母转为大写
2. -webkit-border-image 转换后的结果为 webkitBorderImage
'font-size' --> 'fontSize'
**/

function tranStr(str1) {
  const len = str1.length;
  let L = 0; R = len - 1;
  for (let i = 0, j = len - 1;i < len && j > i;) {
    if ('-' === str1[i]) i++;
    if ('-' === str1[j]) j--;
    
    if ('-' !== str1[i] && '-' !== str1[j]) {
      L = i; R = j + 1;
      break;
    }
  }
  let strTemp = str1.slice(L, R);

  let Arr = strTemp.split('-');
  let newArr = [Arr[0]];
  for (let i = 1;i < Arr.length;i++){
    // 将一个单词的首字母大写
    let word = Arr[i][0].toUpperCase() + Arr[i].slice(1, Arr[i].length);
    newArr.push(word);
  }
  console.log('newArr:',newArr);
  let Ans = newArr.toString().replace(/,/g,'')
  return Ans;
}
let str1 = 'webkit-border-image----';
console.log(tranStr(str1));



/* //
function cssStyle2DomStyle(sName) {
  let pname = sName.split('-')
  console.log(pname);
  for (let i = 0, len = pname.length;i < len;i++) {
    if (pname[i] === '') {
      pname.splice(i, 1)
    }
  }
  // console.log(pname)
  let Str = ''
  for (let index = 0, len = pname.length;index < len;index++) {
    if (index == 0) {
      Str += pname[index]
    } else {
      let Fletter = pname[index].slice(0, 1).toUpperCase()
      let Rest = pname[index].slice(1)
      Str += Fletter + Rest
    }
  }
  return Str
}
let str = '-webkit-border-image'
console.log(cssStyle2DomStyle(str))
 */
