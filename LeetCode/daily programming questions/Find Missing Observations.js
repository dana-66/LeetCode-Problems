// // 2028. Find Missing Observations
// You have observations of n + m 6-sided dice rolls with each face numbered from 1 to 6. n of the observations went missing, and you only have the observations of m rolls. Fortunately, you have also calculated the average value of the n + m rolls.

// You are given an integer array rolls of length m where rolls[i] is the value of the ith observation. You are also given the two integers mean and n.

// Return an array of length n containing the missing observations such that the average value of the n + m rolls is exactly mean. If there are multiple valid answers, return any of them. If no such array exists, return an empty array.

// The average value of a set of k numbers is the sum of the numbers divided by k.

// Note that mean is an integer, so the sum of the n + m rolls should be divisible by n + m.

 

// Example 1:

// Input: rolls = [3,2,4,3], mean = 4, n = 2
// Output: [6,6]
// Explanation: The mean of all n + m rolls is (3 + 2 + 4 + 3 + 6 + 6) / 6 = 4.

/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function(rolls, mean, n) {
    const m = rolls.length;
    const totSum = (n + m) * mean;
    const sumOfRolls = rolls.reduce((acc, roll) => acc + roll, 0);
    const missingSum = totSum - sumOfRolls;

    if(missingSum < n || missingSum > 6 * n) {
        return [];
    }

    //generating the missing rolls
    const result = new Array(n).fill(1);
    let remainingSum = missingSum - n;

    for(let i = 0; i < n && remainingSum > 0; i++) {
        const add = Math.min(5, remainingSum);
        result[i] += add;
        remainingSum -= add;
    }

    return result;
};