/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let x = init
    return {
        increment: () => ++x,
        decrement: () => --x,
        reset: () => x = init
    }
};