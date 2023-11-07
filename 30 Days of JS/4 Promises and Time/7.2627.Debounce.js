/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = (fn, t) => {
    let timeRef;
    return (...args) => {
        clearTimeout(timeRef);
        timeRef = setTimeout(() => fn(...args), t);
    }
};