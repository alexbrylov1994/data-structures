
// 1405. Longest Happy String

// A string is called happy if it does not have any of the strings 'aaa', 'bbb' or 'ccc' as a substring.

// Given three integers a, b and c, return any string s, which satisfies following conditions:

// s is happy and longest possible.
// s contains at most a occurrences of the letter 'a', at most b occurrences of the letter 'b' and at most c occurrences of the letter 'c'.
// s will only contain 'a', 'b' and 'c' letters.
// If there is no such string s return the empty string "".

// Example 1:

// Input: a = 1, b = 1, c = 7
// Output: "ccaccbcc"
// Explanation: "ccbccacc" would also be a correct answer.
// Example 2:

// Input: a = 2, b = 2, c = 1
// Output: "aabbc"
// Example 3:

// Input: a = 7, b = 1, c = 0
// Output: "aabaa"
// Explanation: It's the only correct answer in this case.


// for each loop just add character with the biggest value.
// If character with biggest value has already been added twice, add second biggest
// if second biggest count is 0 we're done


function longestDiverseString(a: number, b: number, c: number): string {
    const len = a + b + c;
    const chars = [
        ['a', a],
        ['b', b],
        ['c', c]
    ];
    const result = [];
    while (result.length < len) {
        const i = result.length;
        chars.sort(([c1, c1count], [c2, c2count]) => (c2count as number) - (c1count as number));
        const char =
            result[i - 1] === result[i - 2] && result[i - 1] === chars[0][0] ? chars[1] : chars[0];
        if (char[1] === 0) break;
        result.push(char[0]);
        char[1] = (char[1] as number) - 1;
    }
    return result.join('');
}
