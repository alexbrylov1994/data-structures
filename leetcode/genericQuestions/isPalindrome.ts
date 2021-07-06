// 125. Valid Palindrome

// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// basic logic
function isPalindrome(s: string): boolean {

    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    let end = s.length - 1;

    for (let start = 0; start <= end; start++) {
        if (s[start] === s[end]) {
            end--;
        } else {
            return false;
        }
    }

    return true;
};

