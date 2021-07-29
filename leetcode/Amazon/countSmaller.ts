// 315. Count of Smaller Numbers After Self

// You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].

// Example 1:

// Input: nums = [5,2,6,1]
// Output: [2,1,1,0]
// Explanation:
// To the right of 5 there are 2 smaller elements (2 and 1).
// To the right of 2 there is only 1 smaller element (1).
// To the right of 6 there is 1 smaller element (1).
// To the right of 1 there is 0 smaller element.
// Example 2:

// Input: nums = [-1]
// Output: [0]
// Example 3:

// Input: nums = [-1,-1]
// Output: [0,0]

// Idea:

// - Build a BST from behind and return smaller elements found during insertion
// - Use node.count to mark the # of elements in the left subtree
// - If go left, update node.count++
// - If go right, update smaller+=node.count+1
// - If duplicate, subtract and update node.dup

function countSmaller(nums: number[]): number[] {
    var Node = function (val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.count = 0;
        this.dup = 0;
    }

    var insert = function (val) {
        let root = bst;
        let newNode = new Node(val);

        // initialize node
        if (!root) {
            bst = newNode;
            return 0;
        }

        var smaller = 0;
        while (root) {
            if (val < root.val) { // go left
                root.count++; // add 1 to root since it has 1 more element in its left subtree
                if (!root.left) {
                    root.left = newNode;
                    return smaller;
                } else {
                    root = root.left
                }
            } else if (val > root.val) { // go to right
                smaller += root.count + 1; // update total smaller numbers
                if (!root.right) {
                    root.right = newNode;
                    return smaller;
                } else {
                    root = root.right;
                }
            } else {
                // add up the current total smaller numbers and remove duplicate numbers
                return smaller + (root.count++) - (root.dup++);
            }
        }
    }

    let bst = null, count = [];
    for (let i = nums.length - 1; i >= 0; i--) {
        count[i] = insert(nums[i]);
    }

    return count;
}

// Time Complexity: O(Nlog(M)).
// We need to iterate over nums.For each element, we spend O(log(M)) to find the number of smaller elements after it,
// and spend O(log(M)) time to update the counts.In total, we need O(N⋅log(M)) = O(Nlog(M)) time.

// Space Complexity: O(M), since we need, at most, an array of size M + 2M + 2 to store the BIT.
// We need at most M + 1M + 1 buckets, where the extra 11 is for the value 00. 
// The BIT requires an extra dummy node, so the size is(M + 1) + 1 = M + 2(M + 1) + 1=M + 2.

// Solution 2
// The Idea - Merge Sort (Inversion Search)
// Apply merge sort
// During backtracking(merging) stage, count and update inversions found

// var countSmallerMergeSort = function(nums) {
//     if (nums.length == 0 || !nums) return nums;

//     let inversion = new Array(nums.length).fill(0);
//     let map = nums.map((val, index)=>{
//         return {'val':val, 'index':index}
//     })

//     var merge = function(arr) {
//         if (arr.length == 1) {
//             return arr
//         }
//         let mid = Math.floor(arr.length/2)
//         let left = merge(arr.slice(0,mid));
//         let right = merge(arr.slice(mid));

//         let li = 0, ri = 0, inversionCount = 0, sorted = [];
//         // compare numbers from left part to right part
//         while (li < left.length ) {
//             if (right[ri] && left[li].val > right[ri].val) {
//                 // inversion found
//                 inversionCount++;
//                 sorted.push(right[ri++]);
//             } else {
//                 // no inversions for this number (or right is exhausted)
//                 // update its inversion count up to the current stack
//                 inversion[left[li].index]+=inversionCount;
//                 sorted.push(left[li++]);
//             }
//         }

//         // deal with left over right values and return
//         return [...sorted, ...right.slice(ri)];        
//     }

//     merge(map);
//     return inversion;
// }

// Time Complexity: O(Nlog(N)). We need to perform a merge sort which takes O(Nlog(N)) time. All other operations take at most O(N) time.

// Space Complexity: )O(N), since we need a constant number of arrays of size O(N).