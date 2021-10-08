// 954. Array of Doubled Pairs

// Given an integer array of even length arr, return true if it is possible to reorder arr such that arr[2 * i + 1] = 2 * arr[2 * i] for every 0 <= i < len(arr) / 2, or false otherwise.

// Example 1:

// Input: arr = [3,1,3,6]
// Output: false
// Example 2:

// Input: arr = [2,1,2,6]
// Output: false
// Example 3:

// Input: arr = [4,-2,2,-4]
// Output: true
// Explanation: We can take two groups, [-2,-4] and [2,4] to form [-2,-4,2,4] or [2,4,-2,-4].
// Example 4:

// Input: arr = [1,2,4,16,8,4]
// Output: false

// Could we find a pair for each number in the array, so one element of the pair is twice bigger than other?

// To easy check if there is an element in the array, we can use counter : a map which counts how many times each number appeared. 
// For [-1, -2, 1, 1, 2, 2] counter would be (-1: 1, -2: 1, 1:2, 2:2).

function canReorderDoubled(arr: number[]): boolean {
    arr.sort((a, b) => a - b);
    let counter = new Map<number, number>();
    for (let num of arr) {
        if (!counter.has(num)) {
            counter.set(num, 0);
        }
        counter.set(num, counter.get(num) + 1);
    }
    for (let num of arr) {
        if (!counter.has(num)) {
            continue;
        }
        let pair = num >= 0 ? num * 2 : num / 2;
        if (!counter.has(pair)) {
            return false;
        }
        for (let k of [num, pair]) {
            counter.set(k, counter.get(k) - 1);
            if (counter.get(k) === 0) {
                counter.delete(k);
            }
        }
    }
    return true;
};