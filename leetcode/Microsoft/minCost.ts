// 1578. Minimum Deletion Cost to Avoid Repeating Letters

// Given a string s and an array of integers cost where cost[i] is the cost of deleting the ith character in s.

// Return the minimum cost of deletions such that there are no two identical letters next to each other.

// Notice that you will delete the chosen characters at the same time, in other words, after deleting a character, the costs of deleting other characters will not change.

// Example 1:

// Input: s = "abaac", cost = [1,2,3,4,5]
// Output: 3
// Explanation: Delete the letter "a" with cost 3 to get "abac" (String without two identical letters next to each other).
// Example 2:

// Input: s = "abc", cost = [1,2,3]
// Output: 0
// Explanation: You don't need to delete any character because there are no identical letters next to each other.
// Example 3:

// Input: s = "aabaa", cost = [1,2,3,4,1]
// Output: 2
// Explanation: Delete the first and the last character, getting the string ("aba").


function minCost(s: string, cost: number[]): number {
    let res = 0;
    for (let i = 0, max = 0; i < s.length; i++) {
        res += cost[i];
        max = Math.max(max, cost[i]);
        if (s[i] !== s[i + 1]) {
            res -= max;
            max = 0;
        }
    }
    return res;
};