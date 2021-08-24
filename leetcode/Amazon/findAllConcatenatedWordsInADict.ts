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


var findAllConcatenatedWordsInADict = function (words) {
    let dict = new Set(words);

    const helper = (dict, word) => {
        for (let i = 1; i < word.length; i++) {
            let left = word.substring(0, i);
            let right = word.substring(i);
            if (dict.has(left)) {
                if (dict.has(right) || helper(dict, right))
                    return true;
            }
        }
        return false;
    }

    let ans = [];
    for (let i = 0; i < words.length; i++) {
        if (helper(dict, words[i]))
            ans.push(words[i]);
    }

    return ans;
};
// function findAllConcatenatedWordsInADict(words: string[]): string[] {
//     const set = new Set(words);

//     // with curWord, we have split `num` words before it
//     const helper = (word, num = 0) => {
//         if (!word) return num > 1;

//         let tmp = "";
//         for (let i = 0; i < word.length; i++) {
//             // build tmp word by appending characters
//             tmp += word[i];
//             if (set.has(tmp)) {
//                 let sub = word.substr(i + 1);
//                 if (helper(sub, num + 1)) {
//                     return true;
//                 }
//             }
//         }
//         return false;
//     }

//     const ans = [];
//     words.forEach(w => {
//         if (helper(w)) {
//             ans.push(w);
//         }
//     });
//     return ans;
// };