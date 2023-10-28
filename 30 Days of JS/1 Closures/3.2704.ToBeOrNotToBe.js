/**
 * @param {string} val
 * @return {Object}
 */
var expect = (val) => {
    return {
        toBe: (expected) => {
            if (val !== expected) throw 'Not Equal';
            return true;
        },
        notToBe: (expected) => {
            if (val === expected) throw 'Equal';
            return true;
        }
    }
};