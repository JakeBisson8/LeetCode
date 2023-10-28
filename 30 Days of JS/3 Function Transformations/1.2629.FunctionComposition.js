/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = (funcs) => {
    return (x) => {
        for (let i = funcs.length - 1; i >= 0; i--)
            x = funcs[i](x);
        return x;
    };
};