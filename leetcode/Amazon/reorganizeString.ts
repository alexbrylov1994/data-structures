// 767. Reorganize String

// Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.

// Return any possible rearrangement of s or return "" if not possible.

// Example 1:

// Input: s = "aab"
// Output: "aba"
// Example 2:

// Input: s = "aaab"
// Output: ""

// we find most frequent characters
// we seperate by frequency
// so we pust most frequest followed up by second most freqent

function reorganizeString(S: string): string {
    let hash = {}, pq = [];
    for (let s of S) hash[s] = hash[s] + 1 || 1;

    for (let key in hash) pq.push([key, hash[key]]);

    pq.sort((a, b) => b[1] - a[1]);

    let res = "";
    while (pq.length != 0) {
        let lastChar = res[res.length - 1];
        let first = pq.shift();

        if (lastChar != first[0]) {
            res += first[0];
            if (first[1] != 1) pq.push([first[0], first[1] - 1]);
        } else {
            let second = pq.shift();
            if (second == null) return "";
            res += second[0];
            pq.push(first);
            if (second[1] != 1) pq.push([second[0], second[1] - 1]);
        }
        pq.sort((a, b) => b[1] - a[1]);
    }
    return res;
}