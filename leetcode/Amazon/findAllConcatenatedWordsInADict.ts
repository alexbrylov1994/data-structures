// 472. Concatenated Words

// Given an array of strings words (without duplicates), return all the concatenated words in the given list of words.

// A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.

// Example 1:

// Input: words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
// Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]
// Explanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats"; 
// "dogcatsdog" can be concatenated by "dog", "cats" and "dog"; 
// "ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".
// Example 2:

// Input: words = ["cat","dog","catdog"]
// Output: ["catdog"]

// 1) Sort the array by length
// 2) Use dynamic programming (bottom up) to check whether array[0,i-1] is a concatenated word
// 3) Build the dp array as we iterate through the word from left to right using end pointer. 
// Iterate array[0, end-1] use another point start. 
// This way, we essentially split the question into 2 parts, array[0,start-1] (which is just dp[start])and array[start, end-1].

function findAllConcatenatedWordsInADict(words: string[]): string[] {
    const set = new Set(words);

    // with curWord, we have split `num` words before it
    const helper = (word, num = 0) => {
        if (!word) return num > 1;

        let tmp = "";
        for (let i = 0; i < word.length; i++) {
            // build tmp word by appending characters
            tmp += word[i];
            if (set.has(tmp)) {
                let sub = word.substr(i + 1);
                if (helper(sub, num + 1)) {
                    return true;
                }
            }
        }
        return false;
    }

    const ans = [];
    words.forEach(w => {
        if (helper(w)) {
            ans.push(w);
        }
    });
    return ans;
};

  // function findAllConcatenatedWordsInADict(words: string[]): string[] {
//     words.sort((a, b) => a.length - b.length);
//     let wordList = new Set();
//     let allConcat = [];
//     let isConcat = function (word) {
//         if (!word) return false;
//         let dp = new Array(word.length + 1).fill(false);
//         dp[0] = true;
//         for (let end = 1; end <= word.length; end++) {
//             for (let start = 0; start < end; start++) {
//                 if (dp[start] && wordList.has(word.slice(start, end))) {
//                     dp[end] = true;
//                     break;
//                 }
//             }
//         }
//         return dp.pop();
//     }

//     for (let i = 0; i < words.length; i++) {
//         if (isConcat(words[i])) {
//             allConcat.push(words[i]);
//         }
//         wordList.add(words[i]);
//     }
//     return allConcat;
// };