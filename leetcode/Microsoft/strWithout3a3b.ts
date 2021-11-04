// 984. String Without AAA or BBB

// Given two integers a and b, return any string s such that:

// s has length a + b and contains exactly a 'a' letters, and exactly b 'b' letters,
// The substring 'aaa' does not occur in s, and
// The substring 'bbb' does not occur in s.


// Example 1:

// Input: a = 1, b = 2
// Output: "abb"
// Explanation: "abb", "bab" and "bba" are all correct answers.
// Example 2:

// Input: a = 4, b = 1
// Output: "aabaa"

function strWithout3a3b(a: number, b: number): string {
    let res = [];
    while (a > 0 || b > 0) {
        let writeA = false;
        let length = res.length;
        if (length >= 2 && res[length - 1] == res[length - 2]) {
            if (res[length - 1] == 'b')
                writeA = true;
        } else {
            if (a >= b)
                writeA = true;
        }

        if (writeA) {
            a--;
            res.push('a');
        } else {
            b--;
            res.push('b');
        }
    }

    return res.join('');
};

// Time and Space O(N)