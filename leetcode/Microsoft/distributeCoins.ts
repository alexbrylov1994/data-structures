// 979. Distribute Coins in Binary Tree

// You are given the root of a binary tree with n nodes where each node in the tree has node.val coins. There are n coins in total throughout the whole tree.

// In one move, we may choose two adjacent nodes and move one coin from one node to another. A move may be from parent to child, or from child to parent.

// Return the minimum number of moves required to make every node have exactly one coin.

// Example 1:

// Input: root = [3,0,0]
// Output: 2
// Explanation: From the root of the tree, we move one coin to its left child, and one coin to its right child.
// Example 2:

// Input: root = [0,3,0]
// Output: 3
// Explanation: From the left child of the root, we move two coins to the root [taking two moves]. Then, we move one coin from the root of the tree to the right child.
// Example 3:

// Input: root = [1,0,2]
// Output: 2
// Example 4:

// Input: root = [1,0,0,null,3]
// Output: 4


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


function distributeCoins(root: TreeNode | null): number {
    let ans = 0;
    const dfs = (node: TreeNode) => {
        if (node == null) return 0;
        let L = dfs(node.left);
        let R = dfs(node.right);
        ans += Math.abs(L) + Math.abs(R);
        return node.val + L + R - 1;
    }

    dfs(root);
    return ans;
}

