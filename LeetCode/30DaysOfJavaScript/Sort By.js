// 2724. Sort By
// Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArray must be sorted in ascending order by fn output.

// You may assume that fn will never duplicate numbers for a given array.

 

// Example 1:

// Input: arr = [5, 4, 1, 2, 3], fn = (x) => x
// Output: [1, 2, 3, 4, 5]
// Explanation: fn simply returns the number passed to it so the array is sorted in ascending order.


/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
// using Bubble Sort
var sortBy = function(arr, fn) {
    let temp ;
    for(let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length - 1 - i; j++) {
           if (fn(arr[j]) < fn(arr[j+1])) {
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
           } 
        }
    }
    return arr;

    // one- line solution
    return arr.sort((a, b) => fn(a) - fn(b));
};

sortBy([5,4,1,2,3], (x) => x);