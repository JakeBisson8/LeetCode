/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = (fn, args, t) => {
    fn(...args);
    const interval = setInterval(() => fn(...args), t);
    return () => clearInterval(interval);
};