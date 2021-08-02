// 1481. Least Number of Unique Integers after K Removals

// Given an array of integers arr and an integer k. Find the least number of unique integers after removing exactly k elements.

// Example 1:

// Input: arr = [5,5,4], k = 1
// Output: 1
// Explanation: Remove the single 4, only 5 is left.

// Example 2:
// Input: arr = [4,3,1,1,3,3,2], k = 3
// Output: 2
// Explanation: Remove 4, 2 and either one of the two 1s or three 3s. 1 and 3 will be left.

function findLeastNumOfUniqueInts(arr: number[], k: number): number {

    let hash = {};
    // create hash that contains frequency
    for (let num of arr) {
        if (hash[num]) {
            hash[num]++;
        } else {
            hash[num] = 1;
        }
    }

    // sort based on freq, low last
    // obj entries looks like ['key', val];
    // descending order
    let newArr = Object.entries(hash).sort((a, b) => (b[1] as number) - (a[1] as number));

    // decrease counter of last element by 1
    // if 0, pop
    // left elements in array are unique numbers left
    while (k) {
        let last = newArr.length - 1;
        (newArr[last][1] as number) -= 1;
        if ((newArr[last][1] as number) === 0) {
            newArr.pop();
        }

        k--
    }

    return newArr.length;
};

console.log(findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 3));

// Time: O(NLogN), sort is the longest


// Time: O(N) where n is number of unique elements