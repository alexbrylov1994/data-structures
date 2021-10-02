// 1110. Delete Nodes And Return Forest

// Given the root of a binary tree, each node in the tree has a distinct value.

// After deleting all nodes with a value in to_delete, we are left with a forest (a disjoint union of trees).

// Return the roots of the trees in the remaining forest. You may return the result in any order.

// Example 1:

// Input: root = [1,2,3,4,5,6,7], to_delete = [3,5]
// Output: [[1,2,null,4],[6],[7]]
// Example 2:

// Input: root = [1,2,4,null,3], to_delete = [3]
// Output: [[1,2,4]]


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

// https://youtu.be/aaSFzFfOQ0o
function delNodes(root: TreeNode | null, to_delete: number[]): Array<TreeNode | null> {
    const res = [];
    const set = new Set(to_delete);

    function dfs(node) {
        if (node == null) return null;

        const left = dfs(node.left);
        const right = dfs(node.right);

        if (set.has(node.val)) {
            if (left) res.push(left);
            if (right) res.push(right);
            // deletes node, returns null
            return null;
        }

        // we build tree up
        node.left = left;
        node.right = right;

        // prop up
        return node;
    }


    root = dfs(root);

    if (root) res.push(root);
    return res;
};
