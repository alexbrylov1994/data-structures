// 340. Longest Substring with At Most K Distinct Characters

// Given a string s and an integer k, return the length of the longest substring of s that contains at most k distinct characters.


// Example 1:

// Input: s = "eceba", k = 2
// Output: 3
// Explanation: The substring is "ece" with length 3.
// Example 2:

// Input: s = "aa", k = 1
// Output: 2
// Explanation: The substring is "aa" with length 2.

function lengthOfLongestSubstringKDistinct(s: string, k: number): number {
    let hash = {};
    let max = 0;
    let start = 0
    let end = 0;

    while (end < s.length) {
        hash[s[end]] = hash[s[end]] + 1 || 1;
        end++;

        while ([...Object.keys(hash)].length > k) {
            hash[s[start]]--;
            if (hash[s[start]] == 0) delete hash[s[start]];
            start++;
        }

        max = Math.max(max, end - start);
    }
    return max;
};
