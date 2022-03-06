// const arr = ["a"]
// const curWord = arr[0];
// const waiting = arr[0][0];
// console.log(curWord, waiting, waiting === curWord );


const intervals = [[1, 3],[14, 66],  [2, 6], [8, 10], [15, 18]];

const sortStart = intervals.sort((a, b) => a[0] - b[0]);

console.log(intervals, sortStart)

