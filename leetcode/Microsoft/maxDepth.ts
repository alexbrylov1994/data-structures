// 104. Maximum Depth of Binary Tree

// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2
// Example 3:

// Input: root = []
// Output: 0
// Example 4:

// Input: root = [0]
// Output: 1


//   Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


function maxDepth(root: TreeNode | null): number {
    return dfs(root, 0);

    function dfs(node, currentDepth) {
        if (!node) {
            return currentDepth;
        }

        currentDepth++;

        return Math.max(dfs(node.right, currentDepth), dfs(node.left, currentDepth));
    };
};

// function maxDepth(root: TreeNode | null): number {
//     if (!root) {
//         return 0
//     }
//     let max = 0;
//     const dfs = (node, level) => {
//         max = Math.max(level, max);
        
//         let nextL = level + 1;
//         if (node.left) {
//             dfs(node.left, nextL);
//         } 

//         if (node.right) {
//             dfs(node.right, nextL);
//         }
//     }
//     dfs(root, 1);

//     return max;
// };
