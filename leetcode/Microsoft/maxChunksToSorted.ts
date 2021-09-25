// 769. Max Chunks To Make Sorted

// You are given an integer array arr of length n that represents a permutation of the integers in the range[0, n - 1].

// We split arr into some number of chunks(i.e., partitions), and individually sort each chunk.After concatenating them, the result should equal the sorted array.

// Return the largest number of chunks we can make to sort the array.


//     Example 1:

// Input: arr = [4, 3, 2, 1, 0]
// Output: 1
// Explanation:
// Splitting into two or more chunks will not return the result.
// For example, splitting into[4, 3], [2, 1, 0] will result in [3, 4, 0, 1, 2], which isn't sorted.
// Example 2:

// Input: arr = [1, 0, 2, 3, 4]
// Output: 4
// Explanation:
// We can split into two chunks, such as [1, 0], [2, 3, 4].
//     However, splitting into[1, 0], [2], [3], [4] is the highest number of chunks possible.

//  O(n) time O(n) space
function maxChunksToSorted(arr: number[]): number {
    const intervals = [0];
    for (let i = 0; i < arr.length; i += 1) {
        const lastInterval = intervals[intervals.length - 1];
        if (i <= lastInterval) {
            intervals[intervals.length - 1] = Math.max(lastInterval, arr[i]);
        } else {
            intervals.push(arr[i]);
        }

    }

    return intervals.length;
};

// O(n) time O(1) space

/**
 * @param {number[]} arr
 * @return {number}
 */
function maxChunksToSorted2(arr: number[]): number {
    let lastInterval = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i += 1) {
        if (i <= lastInterval) {
            lastInterval = Math.max(lastInterval, arr[i]);
        } else {
            lastInterval = arr[i];
            count += 1;
        }

    }

    return count + 1;
};