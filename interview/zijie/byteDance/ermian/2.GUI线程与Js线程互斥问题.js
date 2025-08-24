function demo() {
  const now = Date.now();
  document.body.style.backgroundColor = 'red';
  while(Date.now() - now <= 2000) { continue; }
  document.body.style.backgroundColor = 'blue';
}
/* 作者：故人不在束旧装
链接：https://www.nowcoder.com/discuss/701019?channel=-1&source_id=discuss_terminal_discuss_sim_nctrack&ncTraceId=695cd68c2fb5412faa6e64465ad9dea3.521.16284964527189838
来源：牛客网

解答:当时认为是先变红，然后2s后变成蓝色。面试官提示说，你知道GUI线程和Js线程的互斥吗。正确答案是2s后直接变蓝。

至于为什么,我是这么认为的。Js线程执行到document.body.style.backgroundColor = 'red';,Js线程知道这个是GUI线程该做的事，于是把该任务放到GUI线程中的任务队列里(并未执行)，然后Js线程知道到while循环，在这忙等了2s。然后碰到document.body.style.backgroundColor = 'blue';GUI线程把它压到任务队列里(并未执行)。此时Js执行已经完毕，于是GUI线程执行，清空GUI线程的任务，最后一个任务是变蓝，于是是2s后直接变蓝。 */