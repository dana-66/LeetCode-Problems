// 2727. Is Object Empty
// Given an object or an array, return if it is empty.

// An empty object contains no key-value pairs.
// An empty array contains no elements.
// You may assume the object or array is the output of JSON.parse.

 

// Example 1:

// Input: obj = {"x": 5, "y": 42}
// Output: false
// Explanation: The object has 2 key-value pairs so it is not empty.
/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    // let bool = false;
    // if(Object.keys(obj).length === 0){
    //      bool = true;
    // }
    // return bool;
    return (Object.keys(obj).length === 0);
};