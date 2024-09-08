// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Create a map to store the difference and its index
    const numToIndex = new Map();

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement needed to reach the target
        const complement = target - nums[i];

        // Check if the complement is already in the map
        if (numToIndex.has(complement)) {
            // If it exists, return the indices of the two numbers
            return [numToIndex.get(complement), i];
        }

        // Store the current number and its index in the map
        numToIndex.set(nums[i], i);
    }

    // No solution found; return an empty array (though the problem guarantees one solution)
    return [];
};

// Example Usage:
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6));       // Output: [1, 2]
console.log(twoSum([3, 3], 6));          // Output: [0, 1]

//My soloution 
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const index = [];   //to add the index to it
    // const current = nums[0];

    //loop through the array
    for(let i = 0; i < nums.length - 1; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                index.push(i);
                index.push(j);
                return index; // Return immediately after finding the pair
            }
        }
    }
    return index;

};