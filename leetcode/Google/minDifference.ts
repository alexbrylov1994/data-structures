// 1509. Minimum Difference Between Largest and Smallest Value in Three Moves

// Given an array nums, you are allowed to choose one element of nums and change it by any value in one move.

// Return the minimum difference between the largest and smallest value of nums after perfoming at most 3 moves.

// Example 1:

// Input: nums = [5,3,2,4]
// Output: 0
// Explanation: Change the array [5,3,2,4] to [2,2,2,2].
// The difference between the maximum and minimum is 2-2 = 0.
// Example 2:

// Input: nums = [1,5,0,10,14]
// Output: 1
// Explanation: Change the array [1,5,0,10,14] to [1,1,0,1,1]. 
// The difference between the maximum and minimum is 1-0 = 1.
// Example 3:

// Input: nums = [6,6,0,1,1,4,6]
// Output: 2
// Example 4:

// Input: nums = [1,5,6,14,15]
// Output: 1

// Sort A, then perform a brute-force search of all posibilities using a sliding window of size 3
// Initially set the disclude window of size 3 to the last 3 elements of A, 
// then slide the disclude window by 3. Since A is sorted, 
// we know the element at the ith index is the minimum element 
// under consideration and the element at the jth index is the maximum 
// element under consideration. Below is a picture of this sliding disclude 
// window for example 4. In this example, i and j are adjacent to eachother, 
// however, for larger inputs there exists an arbitrary and irrelevant amount 
// of monotonically non-decreasing values in between i and j.


// we need smallest 3 and largest 3
// then we compare and fid min between them
// so we start at 0 and N-3 where N is length - 1 so points to last number
function minDifference(nums: number[]): number {
    if (nums.length <= 4) {
        return 0;
    }
    nums.sort((a, b) => a - b);
    let N = nums.length - 1 - 3;
    let min = Infinity;
    for (let i = 0; i < 4; i++) {
        min = Math.min(min, nums[N] - nums[i]);
        N++;
    }

    return min;
}

// O(nlogn)