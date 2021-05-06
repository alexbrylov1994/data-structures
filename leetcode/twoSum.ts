// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

function twoSum(nums: number[], target: number): number[] {
    // itterate over array, add to element with index to hash
    // itterate array, // target - el = num
    // check if num exist, if yes return index of it and index of element

    if (nums.length < 2) {
        return null;
    }
    // same element can't happen, Map will have two, object will override
    const hash: Map<number, number> = new Map();

    for (let index = 0; index < nums.length; index++) {
        hash.set(nums[index], index);
    }

    for (let index = 0; index < nums.length; index++) {
        let element = nums[index];
        let key = target - element;

        if (hash.has(key)) {
            return [index, hash.get(key)];
        }
    }

    return null;
};

console.log(twoSum([2, 7, 11, 15], 9));
