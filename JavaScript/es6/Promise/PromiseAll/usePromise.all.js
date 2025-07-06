function resolveTimeout(value, delay) {
  return new Promise(
    resolve => setTimeout(() => resolve(value), delay)
  );
}

function rejectTimeout(reason, delay) {
  return new Promise(
    (r, reject) => setTimeout(() => reject(reason), delay)
  );
}
const allPromise = Promise.all([
  resolveTimeout(['oranges1', 'apples1'], 10),
  resolveTimeout(['oranges2', 'apples2'], 1000),
  resolveTimeout(['oranges3', 'apples3'], 10),
  resolveTimeout(['oranges4', 'apples4'], 1000),
  resolveTimeout(['oranges5', 'apples5'], 10),
]).then(res => {
  const _list = res.reduce((pre, cur) => [...pre, ...cur], []);
  console.log(_list)
});

// wait...
// const lists = await allPromise;

// // after 1 second
// console.log(lists);
// [['potatoes', 'tomatoes'], ['oranges', 'apples']]