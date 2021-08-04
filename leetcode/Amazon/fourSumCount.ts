// 454. 4Sum II

// Given four integer arrays nums1, nums2, nums3, and nums4 all of length n, return the number of tuples (i, j, k, l) such that:

// 0 <= i, j, k, l < n
// nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0


// Example 1:

// Input: nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
// Output: 2
// Explanation:
// The two tuples are:
// 1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
// 2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0
// Example 2:

// Input: nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
// Output: 1

// function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {

// };

function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
    let count = 0;
    const dict = {};

    for (const a of nums1) {
        for (const b of nums2) {
            const currSum = a + b;

            if (!dict[currSum]) {
                dict[currSum] = 0;
            }

            dict[currSum]++;
        }
    }

    for (const c of nums3) {
        for (const d of nums4) {
            const currSum = c + d;

            if (dict[-currSum]) {
                count += dict[-currSum];
            }
        }
    }

    return count;
};

// Time Complexity: O(n^2) We have 2 nested loops to count sums, and another 2 nested loops to find complements.

// Space Complexity: O(n^2) for the hashmap. There could be up to O(n^2) distinct a + b keys.
