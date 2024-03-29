// 1099. Two Sum Less Than K

// Given an array nums of integers and integer k, return the maximum sum such that there exists i < j with nums[i] + nums[j] = sum and sum < k. If no i, j exist satisfying this equation, return -1.

// Example 1:

// Input: nums = [34,23,1,24,75,33,54,8], k = 60
// Output: 58
// Explanation: We can use 34 and 24 to sum 58 which is less than 60.
// Example 2:

// Input: nums = [10,20,30], k = 15
// Output: -1
// Explanation: In this case it is not possible to get a pair sum less that 15.

function twoSumLessThanK(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);

    let leftP = 0;
    let rightP = nums.length - 1;
    let max = -1;
    while (leftP < rightP) {
        let sum = nums[leftP] + nums[rightP];

        if (sum < k) {
            max = Math.max(sum, max);
            leftP++;
        } else {
            rightP--;
        }
    }

    return max;
};

// Time: O(nlogn)
// space: O(1)