// 117. Populating Next Right Pointers in Each Node II

// Given a binary tree

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.

// Example 1:


// Input: root = [1,2,3,4,5,null,7]
// Output: [1,#,2,3,#,4,5,7,#]
// Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
// Example 2:

// Input: root = []
// Output: []


class Node {
    val: number
    left: Node | null
    right: Node | null
    next: Node | null
    constructor(val?: number, left?: Node, right?: Node, next?: Node) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
        this.next = (next === undefined ? null : next)
    }
}


function connect(root: Node | null): Node | null {
    const queue = [root];
    let tail = root;
    // BFS
    while (queue.length) {
        const curr = queue.shift();
        if (!curr) break;
        if (curr.left !== null) queue.push(curr.left);
        if (curr.right !== null) queue.push(curr.right);
        if (curr === tail) {
            curr.next = null;
            tail = queue.length > 0 ? queue[queue.length - 1] : null;
        } else {
            curr.next = queue[0];
        }
    }
    return root;
}

// O(N) space and time