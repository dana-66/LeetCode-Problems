// 2621. Sleep
// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
    // await new Promise(resolve => setTimeout(resolve, millis));
}
// he resolve parameter in the Promise constructor is a function that you call to indicate that the promise has successfully completed its task.
/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */