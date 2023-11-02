/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = (fn, args, t) => {
    const timer = setTimeout(() => fn(...args), t);
    return () => clearTimeout(timer);
};