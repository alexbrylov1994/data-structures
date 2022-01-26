// 404. Sum of Left Leaves

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: 24
// Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.
// Example 2:

// Input: root = [1]
// Output: 0

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


function sumOfLeftLeaves(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    if (!root.left && !root.right) {
        return 0;
    }

    let sum = 0;
    const dfs = (node) => {

        if (node.left) {
            if (!node.left.left && !node.left.right) {
                sum += node.left.val;
            }

            dfs(node.left);
        }

        if (node.right) {
            dfs(node.right);
        }
    }

    dfs(root);

    return sum;
};

// time and space O(N)

// In the worst case, the tree consists of nodes that form a single deep strand. In this case, the runtime-stack will have NN calls