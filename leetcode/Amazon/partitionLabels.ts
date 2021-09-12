// 763. Partition Labels

// You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

// Return a list of integers representing the size of these parts.



// Example 1:

// Input: s = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
// Example 2:

// Input: s = "eccbbbbdec"
// Output: [10]

function partitionLabels(S: string): number[] {
    let map = {}, answer = []
    // record the last index it occurs
    for (let i = 0; i < S.length; i++) {
        map[S[i]] = i
    }

    let j = 0, anchor = 0
    // in a chunk of string, if the last character occurrence of that chunk
    // is same as the index means we are at the end of that partition.
    for (let i = 0; i < S.length; i++) {
        j = Math.max(j, map[S[i]])
        if (i === j) {
            answer.push(i - anchor + 1)
            anchor = i + 1
        }
    }

    return answer
};

