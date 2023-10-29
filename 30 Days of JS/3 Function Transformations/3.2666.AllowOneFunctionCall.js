/**
 * @param {Function} fn
 * @return {Function}
 */
var once = (fn) => {
    let firstRun = true;
    return (...args) => {
        if (!firstRun)
            return undefined;
        firstRun = false;
        return fn(...args);
    }
};