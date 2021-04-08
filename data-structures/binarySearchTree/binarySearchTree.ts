import breadthFirstSearch from "../../algorithms/Traversal/breadthFirstSearch";
import { depthFirstSearchInOrder } from "../../algorithms/Traversal/depthFirstSearch";
import BinaryTreeNode from "./binarySearchTreeNode";
export default class BinarySearchTree {
    root: BinaryTreeNode;
    constructor() {
        this.root = null;
    }

    // insert(value: Number) {
    //     const newNode = new BinaryTreeNode(value);

    //     if (!this.root) {
    //         this.root = newNode;
    //         return;
    //     }

    //     let currentNode = this.root

    //     while (true) {
    //         if (value === currentNode.value) {
    //             return null;
    //         }
    //         if (value < currentNode.value) {
    //             // left
    //             if (!currentNode.left) {
    //                 currentNode.left = newNode;
    //                 return;
    //             }
    //             currentNode = currentNode.left;
    //         } else if (value > currentNode.value) {
    //             // right
    //             if (!currentNode.right) {
    //                 currentNode.right = newNode;
    //                 return;
    //             }
    //             currentNode = currentNode.right;
    //         }
    //     }
    // }

    // helper method which creates a new node to 
    // be inserted and calls insertNode
    insert(value) {
        // Creating a node and initailising 
        // with data 
        var newNode = new BinaryTreeNode(value);

        // root is null then node will
        // be added to the tree and made root.
        if (this.root === null)
            this.root = newNode;
        else

            // find the correct position in the 
            // tree and add the node
            this.insertNode(this.root, newNode);
    }

    // Method to insert a node in a tree
    // it moves over the tree to find the location
    // to insert a node with a given data 
    insertNode(node, newNode) {
        // if the data is less than the node
        // data move left of the tree 
        if (newNode.value < node.value) {
            // if left is null insert node here
            if (node.left === null)
                node.left = newNode;
            else

                // if left is not null recur until 
                // null is found
                this.insertNode(node.left, newNode);
        }

        // if the data is more than the node
        // data move right of the tree 
        else {
            // if right is null insert node here
            if (node.right === null)
                node.right = newNode;
            else

                // if right is not null recur until 
                // null is found
                this.insertNode(node.right, newNode);
        }
    }

    find(value) {
        let currentNode = this.root;
        if (!this.root) {
            return null;
        }

        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            } else if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            }
        }

        // returns null if not found;
        return currentNode;
    }

    remove(value) {
        // root is re-initialized with
        // root of a modified tree.
        this.root = this.removeNode(this.root, value)
    }
    // a recursive function to insert a new value in binary search tree

    removeNode(current, value) {

        // base case, if the tree is empty 

        if (current === null) return current

        // when value is the same as current's value, this is the node to be deleted

        if (value === current.value) {

            // for case 1 and 2, node without child or with one child

            if (current.left === null && current.right === null) {

                return null

            } else if (current.left === null) {

                return current.right

            } else if (current.right === null) {

                return current.left

            } else {

                /// node with two children, get the inorder successor, 
                //smallest in the right subtree

                let tempNode = this.kthSmallestNode(current.right)
                current.value = tempNode.value

                /// delete the inorder successor

                current.right = this.removeNode(current.right, tempNode.value)
                return current
            }

            // recur down the tree

        } else if (value < current.value) {

            current.left = this.removeNode(current.left, value)
            return current

        } else {

            current.right = this.removeNode(current.right, value)
            return current
        }
    }
    kthSmallestNode(node) {
        while (!node.left === null)
            node = node.left

        return node
    }
}


let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20);
console.log('tree:', JSON.stringify(tree));
console.log('BFS:', breadthFirstSearch(tree.root));
console.log('DFS:', depthFirstSearchInOrder(tree.root));
// console.log('found:', tree.find(132));