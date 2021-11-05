// 513. Find Bottom Left Tree Value

// Given the root of a binary tree, return the leftmost value in the last row of the tree.


// Example 1:

// Input: root = [2, 1, 3]
// Output: 1

// Example 2:

// Input: root = [1, 2, 3, 4, null, 5, 6, null, null, 7]
// Output: 7

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

function findBottomLeftValue1(root: TreeNode | null): number {

    let queue = [root];
    let leftMostNode = root.val;

    while (queue.length) {

        let length = queue.length;
        let count = 0;

        leftMostNode = queue[0].val;

        while (count < length) {

            let current = queue.shift();

            if (current.left) {
                queue.push(current.left);
            }

            if (current.right) {
                queue.push(current.right);
            }

            count++;
        }
    }

    return leftMostNode;
};

function findBottomLeftValue2(root: TreeNode | null): number {

    let queue = [root];
    let size = queue.length;
    let leftMostNode = root.val;

    while (queue.length) {

        let current = queue.shift();
        size--;

        if (current.left) {
            queue.push(current.left);
        }

        if (current.right) {
            queue.push(current.right);
        }

        // We do it after we add all leaves because after root, we have empty array
        // size will be equal to 0, not good
        if (size === 0) {
            size = queue.length;
            if (queue[0]) {
                leftMostNode = queue[0].val;
            }
        }

    }

    return leftMostNode;
};