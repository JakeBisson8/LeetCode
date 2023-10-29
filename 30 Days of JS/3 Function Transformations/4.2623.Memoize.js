/**
 * @param {Function} fn
 * @return {Function}
 */
const memoize = (fn) => {
    var cache = new Map()
    return (...args) => {
        let argsString = args.toString();
        if (cache.has(argsString))
            return cache.get(argsString);
        let result = fn(...args);
        cache.set(argsString, result)
        return result;
    }
}
