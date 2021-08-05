// 139. Word Break

// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

// Example 1:

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false


function wordBreak(s: string, wordDict: string[]): boolean {
    if (wordDict == null || wordDict.length === 0) return false;
    const set = new Set(wordDict);

    // When s = 'catsandog', wordDict = ['cats', 'ca', 'ts']
    // After 'cats' and 'ca', it will become 'andog', 'tsandog'
    // For 'tsandog', after 'ts', it will become 'andog' again, visited set here is for memoization
    const visited = new Set();
    const q = [0];

    while (q.length) {
        const start = q.shift();

        if (!visited.has(start)) {
            for (let end = start + 1; end <= s.length; end++) {
                if (set.has(s.slice(start, end))) {
                    if (end === s.length) return true;
                    q.push(end);
                }
            }
            visited.add(start);
        }
    }
    return false;
};

// Complexity Analysis

// n is the length of the input string.

// Time complexity : O(n^3) For every starting index, 
// the search can continue till the end of the given string.

// Space complexity : O(n). Queue of at most nn size is needed.

// Solution 2 DP

const wordBreakDP = (s, wordDict) => {
    if (wordDict == null || wordDict.length === 0) return false;

    const set = new Set(wordDict);
    const dp = Array(s.length + 1).fill(false);
    dp[0] = true;

    for (let end = 1; end <= s.length; end++) {
        for (let start = 0; start < end; start++) {
            const w = s.slice(start, end);
            if (dp[start] === true && set.has(w)) {
                dp[end] = true;
                break;
            }
        }
    }
    return dp[s.length];
};

// Time complexity : O(n^3). There are two nested loops, and substring computation 
// at each iteration. Overall that results in O(n^3)time complexity.

// Space complexity : O(n). Length of pp array is n+1.