// 239. Sliding Window Maximum

// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation: 
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
// Example 3:

// Input: nums = [1,-1], k = 1
// Output: [1,-1]
// Example 4:

// Input: nums = [9,11], k = 2
// Output: [11]
// Example 5:

// Input: nums = [4,-2], k = 2
// Output: [4]


// Monotonic queue

// Complexity
// time O(n)
// space O(k)

// Idea
// Using monotonic queue to push an element in the queue will pop all elements smaller than it.

// Example

// nums = [1, 3, -1, -3, 5, 3, 6, 7], and k = 3

// Monotonic queue  max
// [1]              -
// [3]              -
// [3, -1]          3
// [3, -1, -3]      3
// [5]              5
// [5, 3]           5
// [6]              6
// [7]              7

function maxSlidingWindow(nums: number[], k: number): number[] {
    const res = [];
    const q = [];

    for (let i = 0; i < nums.length; i++) {
        while (q.length - 1 >= 0 && nums[i] > q[q.length - 1]) q.pop();
        q.push(nums[i]);

        // When i + 1 - k >= 0, the window is fully overlapping nums
        const j = i + 1 - k;
        if (j >= 0) {
            res.push(q[0]);
            if (nums[j] === q[0]) q.shift(); // If the biggest element in q is about to exit window, remove it from q
        }
    }
    return res;
};