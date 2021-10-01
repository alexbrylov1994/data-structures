// 1525. Number of Good Ways to Split a String

// You are given a string s, a split is called good if you can split s into 2 non - empty strings p and q where its concatenation is equal to s and the number of distinct letters in p and q are the same.

// Return the number of good splits you can make in s.

//     Example 1:

// Input: s = "aacaba"
// Output: 2
// Explanation: There are 5 ways to split "aacaba" and 2 of them are good. 
// ("a", "acaba") Left string and right string contains 1 and 3 different letters respectively.
// ("aa", "caba") Left string and right string contains 1 and 3 different letters respectively.
// ("aac", "aba") Left string and right string contains 2 and 2 different letters respectively(good split).
// ("aaca", "ba") Left string and right string contains 2 and 2 different letters respectively(good split).
// ("aacab", "a") Left string and right string contains 3 and 1 different letters respectively.
//     Example 2:

// Input: s = "abcd"
// Output: 1
// Explanation: Split the string as follows ("ab", "cd").
//     Example 3:

// Input: s = "aaaaa"
// Output: 4
// Explanation: All possible splits are good.
//     Example 4:

// Input: s = "acbadbaada"
// Output: 2


// we use sets to keep track of unique
// first we wanna add numbers of characters and add to right array 
// because later we go from begining to end of array
// we remove element from map and if 0, means element is removed completly from right set
// if we don't have the element in left set, add it
// compare 2 sets, if equal, increment counter

function numSplits(s: string): number {
    let hash = {};
    let leftSet = new Set();
    let rightSet = new Set();
    for (let char of s) {
        if (!hash[char]) {
            hash[char] = 1;
            rightSet.add(char);
        } else {
            hash[char]++;
        }
    }

    let count = 0;

    for (let char of s) {

        hash[char]--;
        if (hash[char] === 0) {
            rightSet.delete(char);
        }

        if (!leftSet.has(char)) {
            leftSet.add(char);
        }

        if (rightSet.size === leftSet.size) {
            count++;
        }

    }

    return count;
};

// Space and time O(N);