// 28. Find the Index of the First Occurrence in a String
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(haystack.includes(needle)){
        return haystack.indexOf(needle);
    }else{
        return -1;
    }
};

// another faster solution:
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};