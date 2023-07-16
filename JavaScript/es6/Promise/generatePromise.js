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

const promises = [
  resolveTimeout(['oranges1', 'apples1'], 10),
  resolveTimeout(['oranges2', 'apples2'], 1000),
  resolveTimeout(['oranges3', 'apples3'], 10),
  resolveTimeout(['oranges4', 'apples4'], 1000),
  resolveTimeout(['oranges5', 'apples5'], 10),
]

module.exports = {
  resolveTimeout,
  rejectTimeout,
  promises,
}
