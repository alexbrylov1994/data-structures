// 915. Partition Array into Disjoint Intervals

// Given an integer array nums, partition it into two (contiguous) subarrays left and right so that:

// Every element in left is less than or equal to every element in right.
// left and right are non-empty.
// left has the smallest possible size.
// Return the length of left after such a partitioning.

// Test cases are generated such that partitioning exists.

// Example 1:

// Input: nums = [5,0,3,8,6]
// Output: 3
// Explanation: left = [5,0,3], right = [8,6]
// Example 2:

// Input: nums = [1,1,1,0,6,12]
// Output: 4
// Explanation: left = [1,1,1,0], right = [6,12]

function partitionDisjoint(nums: number[]): number {
    let currMax = nums[0];
    let possibleMax = nums[0];
    let length = 1;

    for (let i = 1; i < nums.length; ++i) {
        if (nums[i] < currMax) {
            length = i + 1;
            currMax = possibleMax;
        } else {
            possibleMax = Math.max(possibleMax, nums[i]);
        }
    }

    return length;
}

// Time Complexity: O(N), where NN is the length of nums. We iterate over the input array exactly once and each iteration requires only constant time.

// Space Complexity: O(1). We use only three variables, so the space usage here is constant.

// class Solution {
//     public int partitionDisjoint(int[] nums) {
//         int N = nums.length;
//         int[] minRight = new int[N];
//         minRight[N - 1] = nums[N - 1];

//         for (int i = N - 2; i >= 0; --i) {
//             minRight[i] = Math.min(minRight[i + 1], nums[i]);
//         }

//         int currMax = nums[0];
//         for (int i = 1; i < N; ++i) {
//             currMax = Math.max(currMax, nums[i - 1]);
//             if (currMax <= minRight[i]) {
//                 return i;
//             }
//         }
//         // In case there is no solution, we'll return -1
//         return -1;
//     }
// }