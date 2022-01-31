
// Sum of all the child nodes with even parent values in a Binary Tree

// Given a binary tree, the task is to find the sum of all the nodes whose parent is even.
// Examples: 


// Input:
//        1
//       / \
//      3   8
//         / \
//        5   6
//       /
//      1

// Output: 11
// The only even nodes are 8 and 6 and 
// the sum of their children is 5 + 6 = 11.

// Input:
//        2
//       / \
//      3   8
//     /   / \
//    2   5   6
//       /     \
//      1       3

// Output: 25
// 3 + 8 + 5 + 6 + 3 = 25

// A binary tree node
class ListNode {
    data: number;
    left: Node;
    right: Node;
    constructor() {
        this.data = 0;
        this.left = null;
        this.right = null;
    }
};

var res = 0;

// A utility function to allocate a new node
function newNode(data) {
    var newNode = new ListNode();
    newNode.data = data;
    newNode.left = newNode.right = null;
    return (newNode);
}

// This function visit each node in preorder fashion
// And adds the values of the children of a node with
// even value to the res variable
function calcSum(root) {
    // Base Case
    if (root == null)
        return;

    // If the value of the
    // current node if even
    if (root.data % 2 == 0) {

        // If the left child of the even
        // node exist then add it to the res
        if (root.left != null)
            res += root.left.data;

        // Do the same with the right child
        if (root.right != null)
            res += root.right.data;
    }

    // Visiting the left subtree and the right
    // subtree just like preorder traversal
    calcSum(root.left);
    calcSum(root.right);
}

// Function to return the sum of nodes
// whose parent has even value
function findSum(root) {
    // Initialize result
    res = 0;

    calcSum(root);
    return res;
}

// // Driver code
// // Creating the tree
// var root = newNode(2);
// root.left = newNode(3);
// root.right = newNode(8);
// root.left.left = newNode(2);
// root.right.left = newNode(5);
// root.right.right = newNode(6);
// root.right.left.left = newNode(1);
// root.right.right.right = newNode(3);
// // Print the required sum
// document.write(findSum(root));
