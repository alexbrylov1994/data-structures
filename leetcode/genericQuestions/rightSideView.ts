// 199. Binary Tree Right Side View

// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Example 1:

// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]
// Example 2:

// Input: root = [1,null,3]
// Output: [1,3]
// Example 3:

// Input: root = []
// Output: []


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

const dfs = (node, currentLevel, result) => {
    if (!node) return;
    if (currentLevel >= result.length) {
        result.push(node.val);
    }

    if (node.right) {
        dfs(node.right, currentLevel + 1, result);
    }

    if (node.left) {
        dfs(node.left, currentLevel + 1, result);
    }
}

function rightSideView(root: TreeNode | null): number[] {
    const result = [];

    dfs(root, 0, result);
    return result;
};


// ------- 2nd Solution -------
const rightSideViewBFS = function (root) {
    if (!root) return [];
    const result = [];
    let queue = [root];

    while (queue.length) {
        let length = queue.length, count = 0, currentNode;

        while (count < length) {
            currentNode = queue.shift();

            if (currentNode.left) {
                queue.push(currentNode.left);
            }

            if (currentNode.right) {
                queue.push(currentNode.right);
            }

            count++;
        }

        result.push(currentNode.value)
    }

    return result;
};