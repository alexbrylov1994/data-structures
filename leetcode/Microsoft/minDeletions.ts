
// 1647. Minimum Deletions to Make Character Frequencies Unique

// A string s is called good if there are no two different characters in s that have the same frequency.

// Given a string s, return the minimum number of characters you need to delete to make s good.

// The frequency of a character in a string is the number of times it appears in the string. For example, in the string "aab", the frequency of 'a' is 2, while the frequency of 'b' is 1.



// Example 1:

// Input: s = "aab"
// Output: 0
// Explanation: s is already good.
// Example 2:

// Input: s = "aaabbbcc"
// Output: 2
// Explanation: You can delete two 'b's resulting in the good string "aaabcc".
// Another way it to delete one 'b' and one 'c' resulting in the good string "aaabbc".
// Example 3:

// Input: s = "ceabaacb"
// Output: 2
// Explanation: You can delete both 'c's resulting in the good string "eabaab".
// Note that we only care about characters that are still in the string at the end (i.e. frequency of 0 is ignored).

function minDeletions(s: string): number {
    let hash = {}

    for (let char of s) {
        if (hash[char]) {
            hash[char]++
        } else {
            hash[char] = 1;
        }
    }

    let charFrequencies = Object.values(hash).sort((a, b) => (a as number) - (b as number));

    let set = new Set();
    let delitions = 0;

    // we use set to find find if we have number added
    // if yes decrease until not in set 
    for (let frequency of charFrequencies) {
        if (!set.has(frequency)) {
            set.add(frequency);
        } else {
            // reduce number until 
            // we don't have the same one in the set
            while (set.has(frequency)) {
                (frequency as number)--;
                delitions++;
            }

            // add new char frequency after N delitions
            if (frequency > 0) {
                set.add(frequency);
            }
        }
    }
    return delitions;
};

// time nLogN, space (N)