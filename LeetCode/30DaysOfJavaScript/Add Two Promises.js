// 2723. Add Two Promises
// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

// Example 1:

// Input:
// promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)),
// promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
// Output: 7
// Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  return Promise.all([promise1, promise2]).then((values) => {
    return values[0] + values[1];
  });
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4

// explanation
// Promise.all() method
// This method takes an array of promises and returns a single promise that resolves when all of the promises in the array have resolved. The resolved value of the returned promise is an array containing the resolved values of the input promises.