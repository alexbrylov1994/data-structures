// 545. Boundary of Binary Tree

// The boundary of a binary tree is the concatenation of the root, the left boundary, the leaves ordered from left-to-right, and the reverse order of the right boundary.

// The left boundary is the set of nodes defined by the following:

// The root node's left child is in the left boundary. If the root does not have a left child, then the left boundary is empty.
// If a node in the left boundary and has a left child, then the left child is in the left boundary.
// If a node is in the left boundary, has no left child, but has a right child, then the right child is in the left boundary.
// The leftmost leaf is not in the left boundary.
// The right boundary is similar to the left boundary, except it is the right side of the root's right subtree. Again, the leaf is not part of the right boundary, and the right boundary is empty if the root does not have a right child.

// The leaves are nodes that do not have any children. For this problem, the root is not a leaf.

// Given the root of a binary tree, return the values of its boundary.

// Example 1:
// Input: root = [1,null,2,3,4]
// Output: [1,3,4,2]
// Explanation:
// - The left boundary is empty because the root does not have a left child.
// - The right boundary follows the path starting from the root's right child 2 -> 4.
//   4 is a leaf, so the right boundary is [2].
// - The leaves from left to right are [3,4].
// Concatenating everything results in [1] + [] + [3,4] + [2] = [1,3,4,2].
// Example 2:


// Input: root = [1,2,3,4,5,6,null,null,null,7,8,9,10]
// Output: [1,2,4,7,8,9,10,6,3]
// Explanation:
// - The left boundary follows the path starting from the root's left child 2 -> 4.
//   4 is a leaf, so the left boundary is [2].
// - The right boundary follows the path starting from the root's right child 3 -> 6 -> 10.
//   10 is a leaf, so the right boundary is [3,6], and in reverse order is [6,3].
// - The leaves from left to right are [4,7,8,9,10].
// Concatenating everything results in [1] + [2] + [4,7,8,9,10] + [6,3] = [1,2,4,7,8,9,10,6,3].

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


function boundaryOfBinaryTree(root: TreeNode | null): number[] {
    if (!root) return [];
    if (!root.left && !root.right) return [root.val];
    const res = [root.val];
    buildSide(root.left, 'left', res);
    buildBottom(root, res);
    const right = [];
    buildSide(root.right, 'right', right);
    return [...res, ...right.reverse()];
};

function buildSide(root, side, res) {
    if (!root) return;
    if (root.left || root.right) res.push(root.val);
    if (root[side]) buildSide(root[side], side, res);
    else buildSide(root[side === 'left' ? 'right' : 'left'], side, res);
}

function buildBottom(root, res) {
    if (!root) return;
    if (!root.left && !root.right) res.push(root.val);
    buildBottom(root.left, res);
    buildBottom(root.right, res);
}

// Time complexity : O(n) One complete traversal of the tree is done.

// Space complexity : O(n) The recursive stack can grow upto a depth of nn. 
// Further, left_boundary,right_boundary and leaves combined together can be of size nn.