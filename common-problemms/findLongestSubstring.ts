// Find Longest Substring
const findLongestSubstring = (str: string) => {

    let lookup = {};
    let start = 0;
    let end = 0;
    let len = 0;

    while (end < str.length) {
        let endChar = str[end];
        if (!lookup[endChar]) {
            lookup[endChar] = 1;
            len = Math.max(len, end - start + 1);
            end++;

        } else {
            let starChar = str[start];
            delete lookup[starChar];
            start++;
        }
    }

    return len;
}

// 2nd solution
const findLongestSubstring2 = (str: string) => {

    let longest = 0;
    let seen = {};
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        // index - beginning of substring + 1 (to include current in count)
        console.log('start, end:', longest, (i - start + 1));
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char so as to not double count
        seen[char] = i + 1;
    }
    return longest;
}

