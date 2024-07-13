// 2635. Apply Transform Over Each Element in Array
/* 
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
The returned array should be created such that returnedArray[i] = fn(arr[i], i).
Please solve it without the built-in Array.map method.
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    // fn = n =>  n + 1; function
    //array 
    //i need to pass every el in the array to the function
    const newArr = [];
     for(let i = 0; i < arr.length; i++){
         newArr.push(fn(arr[i],i));
     }
     return newArr;
 };

 const fn = n => n + 1;
 const arr = [1,2,3];
 const newArr = map(arr, fn)
 console.log(newArr);