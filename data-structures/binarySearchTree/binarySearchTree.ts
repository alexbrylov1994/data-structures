import BinaryTreeNode from "./binarySearchTreeNode";

export default class BinarySearchTree {
    root: BinaryTreeNode;
    constructor() {
        this.root = null;
    }

    insert(value: Number) {
        const newNode = new BinaryTreeNode(value);

        if (!this.root) {
            this.root = newNode;
            return;
        }

        let currentNode = this.root

        // approach 1
        // while (currentNode) {
        //     if (value < currentNode.value && currentNode.left) {
        //         currentNode = currentNode.left;
        //     } else if (value > currentNode.value && currentNode.right) {
        //         currentNode = currentNode.right;
        //     } else {
        //         break;
        //     }
        // }

        // if (value < currentNode.value) {
        //     currentNode.left = newNode;
        // } else if (value > currentNode.value) {
        //     currentNode.right = newNode;
        // }

        // approach 2
        // while (true) {
        //     if (value == currentNode.value) {
        //         return null;
        //     }
        //     if (value < currentNode.value) {
        //         if (currentNode.left) {
        //             currentNode = currentNode.left;
        //         } else {
        //             currentNode.left = newNode;
        //             return;
        //         }
        //     } else if (value > currentNode.value) {
        //         if (currentNode.right) {
        //             currentNode = currentNode.right;
        //         } else {
        //             currentNode.right = newNode;
        //             return;
        //         }
        //     }
        // }

        while (true) {
            if (value === currentNode.value) {
                return null;
            }
            if (value < currentNode.value) {
                // left
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return;
                }
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                // right
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return;
                }
                currentNode = currentNode.right;
            }
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


// let tree = new BinarySearchTree();
// tree.insert(10);
// tree.insert(3);
// tree.insert(2);
// tree.insert(4);
// tree.insert(11);
// tree.insert(12);
// console.log(JSON.stringify(tree));
// console.log('found:', tree.find(132));