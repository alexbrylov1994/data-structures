// 3. Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Example 4:

// Input: s = ""
// Output: 0

function lengthOfLongestSubstring(s: string): number {
    let longest = 0;
    let hasMap = {};
    let start = 0;

    if (s.length <= 1) {
        return s.length;
    }

    for (let end = 0; end < s.length; end++) {

        // we update 
        if (hasMap[s[end]] >= start) {
            start = hasMap[s[end]]
        }

        hasMap[s[end]] = end;

        longest = Math.max(longest, (end - start + 2));
    }

    return longest;
};

console.log(lengthOfLongestSubstring("au"));