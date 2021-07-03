
let isMount = true;
let workInprogressHook = null;

const fiber = {
  stateNode: App,
  memorizedState:null,
}

function useState(initialState) {
  let hook; // 单向链表
  if (isMount) {
    hook = {
      memorizedState: initialState,
      next: null,
      queue: { // honk更新状态的标志
        pending:null,
      }
    }
    // 将hook插入fiber.memoizedState链表末尾
    if (!fiber.memorizedState) {
      fiber.memorizedState = hook;

    } else {
      workInprogressHook.next = hook;
    }
    workInprogressHook = hook;
  } else {
    hook = workInprogressHook;   // update时找到对应hook
    workInprogressHook = workInprogressHook.next;
  }
  let baseState = hook.memorizedState;
  if (hook.queue.pending) {
    let firstUpdate = hook.queue.pending.next;
    do {
      const action = firstUpdate.action;
      baseState = action(baseState);
      firstUpdate = firstUpdate.next;

    } while (firstUpdate !== hook.queue.pending.next)

    hook.queue.pending = null;
  }

  hook.memorizedState = baseState;
  return [baseState,dispatchAction.bind(null,hook.queue)]
}
// 实现setState
function dispatchAction(queue,action) {
  const update = {   // 需要设置为双向链表
    action,
    next:null,
  }

  if (queue.pending == null) {
    update.next = update; // 设置为环状链表
  } else {
    /* u0 -> u0    // u0 is queue.next.  u1 is  update
       u0 -> u1 -> u0
    */
    update.next = queue.pending.next;
    queue.pending.next = update;
  }
  queue.pending = update;
  schedule() // 触发更新

}

//调度器
function schedule() {
  workInprogressHook = fiber.memorizedState;
  const app = fiber.stateNode();
  isMount = false;
  return app;
}

function App() {
  const [num, updateNum] = useState(0);
  const [num1, updateNum1] = useState(10);
  // const [num1, updateNum1] = useState(0);

  const xxx = useMemo(() => {
    return 'iamhuangsq'
  })

  console.log('isMount?', isMount);
  console.log('num<<',num);
  console.log('num1<<', num1);

  return {
    onClick(){
      updateNum(num => num + 2);
    },
    onClick1() {
      updateNum1((num)=>num + 5)
      updateNum1((num)=>num + 5)
    }
  }
}

window.app = schedule();