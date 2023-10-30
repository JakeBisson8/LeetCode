/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async (promise1, promise2) => {
    return Promise.resolve(await promise1 + await promise2);
};