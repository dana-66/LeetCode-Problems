// 1768. Merge Strings Alternately
/*You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string. */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let combinedString = "";
    let pointer1 = 0;
    let pointer2 = 0;

    while(pointer1 < word1.length || pointer2 < word2.length){
        if(pointer1 < word1.length){
            combinedString += word1[pointer1++];
        }
        if(pointer2 < word2.length){
            combinedString += word2[pointer2++];
        }
    }
    return combinedString;
};