

{
  // 3. 反向引用
  var regex = /\d{4}(-|\/|\.)\d{2}(-|\/|\.)\d{2}/;
  var string1 = "2017-06-12";
  var string2 = "2017/06/12";
  var string3 = "2017.06.12";
  var string4 = "2016-06/12";
  console.log( regex.test(string1) ); // true
  console.log( regex.test(string2) ); // true
  console.log( regex.test(string3) ); // true
  console.log( regex.test(string4) ); // true

}
// 其中/和.需要转义。虽然匹配了要求的情况，但也匹配"2016-06/12"这样的数据。

// 假设我们想要求分割符前后一致怎么办？此时需要使用反向引用：
{
  var regex = /\d{4}(-|\/|\.)\d{2}\1\d{2}/;
  var string1 = "2017-06-12";
  var string2 = "2017/06/12";
  var string3 = "2017.06.12";
  var string4 = "2016-06/12";
  console.log( regex.test(string1) ); // true
  console.log( regex.test(string2) ); // true
  console.log( regex.test(string3) ); // true
  console.log( regex.test(string4) ); // false
  // 注意里面的\1，表示的引用之前的那个分组(-|\/|\.)。不管它匹配到什么（比如-），\1都匹配那个同样的具体某个字符。

  // 我们知道了\1的含义后，那么\2和\3的概念也就理解了，即分别指代第二个和第三个分组。

  // 看到这里，此时，恐怕你会有三个问题。
}