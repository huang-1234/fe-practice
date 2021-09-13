/* 时间限制： 3000MS
内存限制： 589824KB
题目描述：
写一个函数接收语义化的描述，得到计算后的日期时间

PS: (暂不考虑 月年 的计算)

+/-3W 加或减3周

+/-3d 加或减3天

+/-3h 加或减3小时

+/-3m 加或减3分钟

+/-3s 加或减3秒

比如

==============

第一行参数

2021-09-13 00:00:00

+5d

得到结果

2021-09-18 00:00:00

===============

第一行参数

2021-09-13 00:00:00

+3m +3h

得到结果

2021-09-13 03:03:00



输入描述
第一行是一个日期（日期和时间中间用空格隔开）

第二行是个时间操作描述（可能存在多个操作，操作间有空格隔开）

输出描述
输出一个计算后的时间 */
const dateStr = `2021-09-13 00:00:00`
const dateArr = dateStr.trim().split(' ')[0].split('-').map(Number);
const timeArr = dateStr.trim().split(' ')[1].split(':').map(Number);
console.log(dateArr);
console.log(timeArr);

const opeStr = `+3m +3h`
const operations = opeStr.trim().split(' ');
for (let i = 0, oLen = operations.length;i < oLen;i++) {
  const opeArr = operations[i].split('');
  const timeType = opeArr[2];
  switch (timeType) {
    case 'y':
      dateArr[0] = eval(`${dateArr[0]}${opeArr[0]}${opeArr[1]}`)
      break;
    case 'm':
      dateArr[1] = eval(`${dateArr[1]}${opeArr[0]}${opeArr[1]}`)
      break;
    case 'W':
      dateArr[2] = eval(`${dateArr[2]}${opeArr[0]}${opeArr[1]}*7`)
      break;
    case 'd':
      dateArr[2] = eval(`${dateArr[2]}${opeArr[0]}${opeArr[1]}`)
      break;
    case 'h':
      timeArr[0] = eval(`${timeArr[0]}${opeArr[0]}${opeArr[1]}`)
      break;
    case 'm':
      timeArr[1] = eval(`${timeArr[1]}${opeArr[0]}${opeArr[1]}`)
      break;
    case 's':
      timeArr[2] = eval(`${timeArr[2]}${opeArr[0]}${opeArr[1]}`)
      break;

    default:
      break;
  }
}
const date1 = new Date(
  dateArr[0],
  dateArr[1],
  dateArr[2],
  timeArr[0],
  timeArr[1],
  timeArr[2],
)
console.log(`${dateArr[0]}-${dateArr[0]}-${dateArr[0]} ${timeArr[0]}:${timeArr[1]}:${timeArr[2]}`);
const date2 = new Date(
  0,
  0,
  7,
  0,
  0,
  0,
)
console.log(date1 + date2);

// console.log((`+3m +3h`).split(''));