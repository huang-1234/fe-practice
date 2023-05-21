/*
 * @Author: huangsq
 * @Date: 2021-05-21 20:05:58
 * @Last Modified by: huangsq
 * @Last Modified time: 2023-05-21 20:15:20
 */
{

  console.log('the Macro1 Task begin');
  setTimeout(() => {
    console.log('the Macro2 Task start');
    Promise.resolve('the micro of Macro2 Task 也不死心, 玩了玩，好像要一直then下去')
      .then(
        res => {
          console.log('这里怎么又出现了微任务, 仔细一看, 哦哦哦，原来 is the micro task of the Macro2 Task 呀');
          console.log(res)
          return res
        },
        err => {
          console.log(err);
        }
      ).then(
        res => {
          console.log(res)
          return res
        },
        err => {
          console.log(err);
        }
      ).then(
        res => {
          console.log(res)
          return res
        },
        err => {
          console.log(err);
        }
      ).then(
        res => {
          console.log(res)
          console.log('第二个宏任务的微任务终于也结束了');
        },
        err => {
          console.log(err);
        }
      )
  });
  Promise.resolve().then(
    () => console.log('我在第一个宏任务中默默开启一下微任务，嘿嘿嘿')
  ).then(
    () => Promise.resolve('微任务不死心，要一直then下去').then(
      (data) => {
        setTimeout(() => {
          console.log('the Macro3 Task start')
          Promise.resolve('the Macro3 Task')
            .then(
              res => {
                console.log('呀呀呀! 怎么办， 这里怎么又出现了微任务, 原来 is the micro task of the Macro3 Task');
                console.log(res)
              },
              err => {
                console.log(err);
              }
            )
        });
        console.log('我的这个微任务还没执行吗, 啧啧啧。。。');
        // console.log('data:',data);
        return data;
      }
    )
  ).then(data => {
    console.log(data);
    return data;
  }).then(data => {
    console.log(data);
    return data;
  }).then(data => {
    console.log(data);
    console.log('当前的宏任务和微任务们终于都结束了，太开心了')
  })

  console.log('the Macro1 Task end');

  // node 输出
  /*
  the Macro1 Task begin
  the Macro1 Task end
  我在第一个宏任务中默默开启一下微任务，略略略
  我的这个微任务还没执行吗, 啧啧啧。。。
  微任务不死心，要一直then下去
  微任务不死心，要一直then下去
  微任务不死心，要一直then下去
  当前的宏任务和微任务终于都结束了，太开心了
  the Macro2 Task start
  这里怎么又出现了微任务, 仔细一看, 哦哦哦，原来 is the micro task of the Macro2 Task 呀
  the Macro2 Task
  the Macro3 Task start
  呀呀呀! 怎么办， 这里怎么又出现了微任务, 原来 is the micro task of the Macro3 Task
  the Macro3 Task
   */
}