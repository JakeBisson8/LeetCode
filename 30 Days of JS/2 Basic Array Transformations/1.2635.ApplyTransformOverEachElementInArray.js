/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
let map = (arr, fn) => {
    const a = [];
    arr.forEach((e, i) => a.push(fn(e, i)));
    return a;
};