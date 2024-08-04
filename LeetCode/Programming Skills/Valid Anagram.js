// 242. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false
    }
    // to get the frequenceies of each char in the array
    let countS = {};
    let countT = {};

     for (let char of s) {
        countS[char] = (countS[char] || 0) + 1;
    }

     for (let char of t) {
        countT[char] = (countT[char] || 0) + 1;
    }

    for (let char in countS) {
        if (countS[char] !== countT[char]) {
            return false;
        }
    }

    return true;
};

//another solution 

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    return (s.split('').sort().join() === t.split('').sort().join())
};

// which algorithm is better:
// Comparison
// Frequency Counting Method
// Pros:
//     1- Time Complexity: 
//       O(n), where 𝑛 is the length of the strings.Counting characters and comparing dictionaries are both linear operations.

//     2-Space Complexity: 
//         O(1) (constant space) in terms of the alphabet size. The space required is proportional to the number of unique characters in the input strings, which is fixed for a given alphabet (e.g., 26 for lowercase English letters).
// Cons:

// Implementation Complexity: Slightly more code and logic are required to implement the character counting and comparison.


// Sorting Method
// Pros:

//     1- Simplicity: Very concise and easy to understand. The implementation is just one line of code.
//     2- Ease of Use: It leverages built-in array methods, which makes it straightforward and less error-prone.

// Cons:
//     Time Complexity:  O(nlogn), where n is the length of the strings. This is due to the sorting step, which is more expensive than linear time.

//     Space Complexity: O(n), because sorting algorithms typically require additional space proportional to the input size.

// Which is Better?
//     For Small Inputs: If the input strings are relatively short, the difference in performance between O(n) and O(nlogn) might not be significant, making the sorting method's simplicity an attractive choice.

//     For Large Inputs: If performance is critical, especially with long strings, the frequency counting method is generally better due to its linear time complexity.

//     Readability and Maintainability: For quick, readable code, the sorting method is often preferable. For robust, performance-sensitive applications, the frequency counting method might be a better choice despite its added complexity.


// Conclusion
//     -Use the Sorting Method when you prioritize simplicity and ease of implementation, and performance is not a critical concern.
    
//     -Use the Frequency Counting Method when you need better performance for large inputs or want to avoid the overhead of sorting.