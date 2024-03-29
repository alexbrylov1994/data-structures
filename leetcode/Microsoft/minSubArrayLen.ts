// // Min Sub Array Len
// 209. Minimum Size Subarray Sum

// Share
// Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.



// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0

const minSubArrayLen = (nums: number[], target: number): number => {

    if (nums.length == 0) return 0;

    let left = 0
    let right = 0
    let sum = 0
    let min = Infinity;

    while (right != nums.length) {

        sum += nums[right];

        while (sum >= target) {
            min = Math.min(min, right - left + 1);
            sum -= nums[left];
            left++;
        }

        right++;
    }
    if (min == Infinity)
        return 0;

    return min;
};