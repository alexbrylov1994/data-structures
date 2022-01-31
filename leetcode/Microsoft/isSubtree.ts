// 572. Subtree of Another Tree

// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

// Example 1:

// Input: root = [3,4,5,1,2], subRoot = [4,1,2]
// Output: true
// Example 2:


// Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
// Output: false

// https://youtu.be/E36O5SWp-LE
//  Definition for a binary tree node.
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


function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (!root) {
        return false;
    } else if (isSameTree(root, subRoot)) {
        return true;
    } else {
        return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
    }
}

const isSameTree = (root: TreeNode, subRoot: TreeNode): boolean => {

    // if one null, both must be null else false
    if (!root || !subRoot) {
        return root === null && subRoot === null;
    } else if (root.val === subRoot.val) {
        return isSameTree(root.left, subRoot.left) && isSameTree(root.right, subRoot.right)
    } else {
        return false;
    }
}