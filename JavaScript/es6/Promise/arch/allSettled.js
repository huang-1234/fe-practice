const allSettled = function (promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve([]);
    } else {
      let result = [];
      let index = 0;
      for (let i = 0; i < promises.length; i++) {
        promises[i]
          .then(
            (value) => {
              result[i] = {
                status: 'fulfilled',
                value,
              };
            },
            (reason) => {
              result[i] = {
                status: 'rejected',
                reason,
              };
            }
          )
          .finally(() => {
            if (++index === promises.length) {
              return resolve(result);
            }
          });
      }
    }
  });
};
