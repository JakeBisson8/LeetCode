/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = (functions) => new Promise((resolve, reject) => {
    const results = new Array(functions.length).fill(null);
    let resolvedCount = 0;
    functions.forEach(async (fn, i) => {
        try {
            const result = await fn();
            results[i] = result;
            resolvedCount++;
            if (resolvedCount === functions.length) {
                resolve(results);
            }
        } catch (err) {
            reject(err);
        }
    });
})
