/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = (nums, fn, init) => {
    nums.forEach((e) => init = fn(init, e))
    return init;
};