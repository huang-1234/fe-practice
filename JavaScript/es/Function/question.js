/* const module1 = {
  x: 42,
  getX: function () {
    return this.x;
  }
};

const unboundGetX = module1.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(module1);
console.log(boundGetX());
// expected output: 42 */

/**
css 中经常有类似 background-image 这种通过 - 连接的字符，
通过 javascript 设置样式的时候需要将这种样式转换成 backgroundImage 驼峰格式，
请完成此转换功能
1. 以 - 为分隔符，将第二个起的非空单词首字母转为大写
2. -webkit-border-image 转换后的结果为 webkitBorderImage
'font-size' --> 'fontSize'

**/

/*
* str1,
* return str2
*/

function tranStr(str1) {
  const len = str1.length;
  let L = 0; R = len - 1;
  for (let i = 0, j = len - 1;i < len && j > i;) {
    if ('-' === str1[i]) {
      i++;
    }
    if ('-' === str1[j]) {
      j--;
    }
    if ('-' !== str1[i] && '-' !== str1[j]) {
      L = i; R = j + 1;
      break;
    }
  }
  let strTemp = str1.slice(L, R);
  let Ans = new String();
  tempLen = strTemp.length;
  console.log(tempLen);

  // let L2 = R2 = 0;
  // for (let i = 0,tag=0;i < tempLen;i++){
  //   if ('-' !== strTemp[i]) {
  //     continue;
  //   }
  //   else {

  //     ++i;
  //     let Letter = strTemp[i].toUpperCase(); console.log(Letter);
  //     console.log('i:', i, strTemp.slice(L2, i - 1));
  //     R2 = i - 1;
  //     let word = Letter +  strTemp.slice(L2+1, R2);
  //   }
  // }
  let Arr = strTemp.split('-');
  console.log(Arr);
  console.log('strTemp:', strTemp, 'Ans:', Ans);
  return Ans;
}

let str1 = '-webkit-border-image----';
console.log(tranStr(str1));



