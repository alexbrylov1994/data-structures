
// 951. Flip Equivalent Binary Trees

// For a binary tree T, we can define a flip operation as follows: choose any node, and swap the left and right child subtrees.

// A binary tree X is flip equivalent to a binary tree Y if and only if we can make X equal to Y after some number of flip operations.

// Given the roots of two binary trees root1 and root2, return true if the two trees are flip equivelent or false otherwise.

// Example 1:

// Flipped Trees Diagram
// Input: root1 = [1,2,3,4,5,6,null,null,null,7,8], root2 = [1,3,2,null,6,4,5,null,null,null,null,8,7]
// Output: true
// Explanation: We flipped at nodes with values 1, 3, and 5.
// Example 2:

// Input: root1 = [], root2 = []
// Output: true
// Example 3:

// Input: root1 = [], root2 = [1]
// Output: false
// Example 4:

// Input: root1 = [0,null,1], root2 = []
// Output: false
// Example 5:

// Input: root1 = [0,null,1], root2 = [0,1]
// Output: true

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
// https://www.youtube.com/watch?v=izRDc1il9Pk
// we take left subtree of first tree and right subtree of seconond tree and we compare
function flipEquiv(root1: TreeNode | null, root2: TreeNode | null): boolean {
    if (root1 == null && root2 == null) return true;
    if (root1 == null || root2 == null) return false;
    if (root1.val != root2.val) return false;

    // if trees are exactly equal. all good
    const regular = flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right);
    // we flip and check
    const flipped = flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left);

    return regular || flipped;
};