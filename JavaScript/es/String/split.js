// var color = 'red,blue,yellow,black';
// var color1 = color.split(',');        // =>['red','blue','yellow','black']
// var color2 = color.split(',',2);    // =>['red','blue']
// var color3 = color.split(/[^\,]+/); // =>["", ",", ",", ",", ""]
// console.log(color3)
const strId = 1223423

const idArr = strId.toString().split(',')
console.log(idArr);