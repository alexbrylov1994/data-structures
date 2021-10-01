// 792. Number of Matching Subsequences

// Given a string s and an array of strings words, return the number of words[i] that is a subsequence of s.

// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".

// Example 1:

// Input: s = "abcde", words = ["a","bb","acd","ace"]
// Output: 3
// Explanation: There are three strings in words that are a subsequence of s: "a", "acd", "ace".
// Example 2:

// Input: s = "dsahjpjauf", words = ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"]
// Output: 2

// sub sequence doesn't need to be contiginous, abcde  -> ace is subsequence
function numMatchingSubseq(s: string, words: string[]): number {
    let count = 0;
    for (let word of words) {
        let start = 0;
        let matches = 0;
        for (let char of word) {
            for (start; start < s.length; start++) {
                if (char === s[start]) {
                    matches++;
                    start++;
                    break;
                }
            }
        }

        if (matches === word.length) {
            count++;
        }
    }

    return count;
};

// brute force 