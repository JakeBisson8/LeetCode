/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = (fn, t) => {
  return async (...args) => {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject("Time Limit Exceeded"), t);
      fn(...args)
        .then((val) => {
          clearTimeout(timer);
          resolve(val);
        })
        .catch((err) => {
          clearTimeout(timer);
          reject(err);
        });
    });
  };
};

/**
 * Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = (fn, t) => {
  return async (...args) => {
    const p1 = new Promise((resolve, reject) => {
      setTimeout(() => reject("Time Limit Exceeded"), t);
    });
    const p2 = fn(...args);
    return Promise.race([p1, p2]);
  };
};
