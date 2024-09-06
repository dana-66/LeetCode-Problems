// 2695. Array Wrapper
/*  
Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:

When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].
 

Example 1:

Input: nums = [[1,2],[3,4]], operation = "Add"
Output: 10
Explanation:
const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);
obj1 + obj2; // 10
Example 2:

Input: nums = [[23,98,42,70]], operation = "String"
Output: "[23,98,42,70]"
Explanation:
const obj = new ArrayWrapper([23,98,42,70]);
String(obj); // "[23,98,42,70]"
Example 3:

Input: nums = [[],[]], operation = "Add"
Output: 0
Explanation:
const obj1 = new ArrayWrapper([]);
const obj2 = new ArrayWrapper([]);
obj1 + obj2; // 0
*/


// /**
//  * @param {number[]} nums
//  * @return {void}
//  */
// var ArrayWrapper = function(nums) {
//     this.nums = nums; 
// };


// /**
// * @return {number}
// */
// ArrayWrapper.prototype.valueOf = function() {
//    return this.nums.reduce((acc, val) => acc + val, 0);
// }

// /**
// * @return {string}
// */
// ArrayWrapper.prototype.toString = function() {
//    return `[${this.nums.join(',')}]`;
// }

/**
* const obj1 = new ArrayWrapper([1,2]);
* const obj2 = new ArrayWrapper([3,4]);
* obj1 + obj2; // 10
* String(obj1); // "[1,2]"
* String(obj2); // "[3,4]"
*/

//another way to do so
class ArrayWrapper {
    constructor(arr){
        this.arr = arr;
    }

    //to overLoad the + by rewriting the valueOf method
    valueOf() {
        return this.arr.reduce((acc, val) => acc + val, 0);
    }

    //override the toString method to return the desired format
    toString() {
        return `[${this.nums.join(',')}]`;
    }
}

//ex1 : Testing addition of two ArrayWrapper instances
const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);

console.log(obj1 + obj2);

//ex2 : testing the string representation of an ArrayWrapper instance
const obj3 = new ArrayWrapper([66, 32, 69, 76]);
console.log(toString(obj3));