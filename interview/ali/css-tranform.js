

/**
css 中经常有类似 background-image 这种通过 - 连接的字符，
通过 javascript 设置样式的时候需要将这种样式转换成 backgroundImage 驼峰格式，
请完成此转换功能
1. 以 - 为分隔符，将第二个起的非空单词首字母转为大写
2. -webkit-border-image 转换后的结果为 webkitBorderImage
'font-size' --> 'fontSize'
**/

/**
 *
 * @param {string} cssProperty
 */
function cssStyle2DomStyle(cssProperty) {
  const cssPropVar = cssProperty.split('-')
  const cssPropVarFilter = cssPropVar.map(s => s?.trim()).filter(s => s)
  console.log('cssPropVar', cssPropVarFilter)
  if (cssPropVarFilter[0] === '') {
    cssPropVarFilter.splice(0, 1)
  }
  if (cssPropVarFilter.length === 1) {
    return cssPropVarFilter[0];
  }
  let finalProperty = cssPropVarFilter[0], finalProperties = [cssPropVarFilter[0]]
  for (let i = 1;i < cssPropVarFilter.length;i++) {
    const safeStr = cssPropVarFilter[i]?.trim();
    if (safeStr?.length) {
      finalProperties.push(safeStr)
      finalProperty += safeStr?.charAt(0).toUpperCase() + safeStr.slice(1)
    }
  }
  console.log('finalProperties', finalProperties, finalProperty)
  return finalProperty
}
const str1 = '-webkit-border-image';
const str2 = 'webkit-border-image-  b---';
[str1, str2].forEach(str => {
  cssStyle2DomStyle(str)
})