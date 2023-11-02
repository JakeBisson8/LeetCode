/**
 * @param {number} millis
 * @return {Promise}
 */
const sleep = async (millis) => {
    return new Promise((resolve) => setTimeout(() => resolve(), millis));
}