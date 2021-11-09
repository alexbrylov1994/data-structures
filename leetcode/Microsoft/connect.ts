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

// my solution
// function connect(root: Node | null): Node | null {
//     if(!root) {
//         return root;
//     }

//     let queue = [root];

//     while (queue.length) {

//         if (queue.length > 1) {
//             for (let i = 0; i < queue.length - 1; i++) {
//                 queue[i].next = queue[i + 1];
//             }
//         }

//         let length = queue.length;
//         let count = 0;


//         while (count < length) {

//             let current = queue.shift();
//             if (current.left) {
//                 queue.push(current.left);
//             }

//             if (current.right) {
//                 queue.push(current.right);
//             }

//             count++;
//         }
//     }

//     return root;
// };
// to improve time can have 2d array, each element is a level, then itterate it, connect,done


function connect(root: Node | null): Node | null {
    if (root == null) return root;
    let queue = [root];
    while (queue.length != 0) {
        let next = [];
        while (queue.length != 0) {
            let node = queue.shift();
            node.next = queue[0] || null;
            if (node.left != null) {
                next.push(node.left);
                next.push(node.right);
            }
        }
        queue = next;
    }
    return root;
};
// O(N) space and time