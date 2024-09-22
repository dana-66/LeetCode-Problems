// // 2625. Flatten Deeply Nested Array
// Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

// A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

// A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

// Please solve it without the built-in Array.flat method.

// Example 1:

// Input
// arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
// n = 0
// Output
// [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

// Explanation
// Passing a depth of n=0 will always result in the original array. This is because the smallest possible depth of a subarray (0) is not less than n=0. Thus, no subarray should be flattened.

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  let result = [];
  for (let elemnt of arr) {
    if (Array.isArray(elemnt) && n > 0) {
      result = result.concat(flat(elemnt, n - 1));
    } else {
      result.push(elemnt);
    }
  }
  return result;
};

// Test case 1
let arr1 = [1, [2, [3, [4]]]];
console.log(flat(arr1, 1)); // Output: [1, 2, [3, [4]]]

// Test case 2
let arr2 = [1, [2, [3, [4]]]];
console.log(flat(arr2, 2)); // Output: [1, 2, 3, [4]]

// Test case 3
let arr3 = [1, [2, [3, [4]]]];
console.log(flat(arr3, 3)); // Output: [1, 2, 3, 4]

// Test case 4
let arr4 = [1, 2, [3, [4, [5, 6]], 7], 8];
console.log(flat(arr4, 2)); // Output: [1, 2, 3, 4, [5, 6], 7, 8]
