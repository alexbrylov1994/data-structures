// 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.


// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true

function isValid(s: string): boolean {
    let stack = [];

    const parens = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    for (let index = 0; index < s.length; index++) {
        let char = s[index];

        if (parens[s[index]]) {
            stack.push(char);
        } else {
            let leftBracket = stack.pop();
            if (s[index] !== parens[leftBracket]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};