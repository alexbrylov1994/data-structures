// 1304. Find N Unique Integers Sum up to Zero

// Given an integer n, return any array containing n unique integers such that they add up to 0.

// Example 1:

// Input: n = 5
// Output: [-7,-1,1,3,4]
// Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
// Example 2:

// Input: n = 3
// Output: [-1,0,1]
// Example 3:

// Input: n = 1
// Output: [0]

function sumZero(n: number): number[] {
    let result = [];
    let half = Math.floor(n / 2)
    // we create pair of positive and negative to cancel each other out
    for (let i = 1; i <= half; i++) {
        result.push(-i, i)
    }

    // if odd, add 0
    if ((n % 2) !== 0) {
        result.push(0);
    }

    return result;
};

// Time and Space O(N)