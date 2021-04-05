import BinaryTreeNode from "../../data-structures/binarySearchTree/binarySearchTreeNode";

export function depthFirstSearchPreOrder(rootNode: BinaryTreeNode) {
    const result: number[] = [];
    depthFirstSearchRecursive(rootNode);

    function depthFirstSearchRecursive(node: BinaryTreeNode) {
        result.push(node.value);
        console.log('dfs', node.value)

        if (node.left) {
            depthFirstSearchRecursive(node.left);
        }
        if (node.right) {
            depthFirstSearchRecursive(node.right);
        }
    }
    return result;
}

export function depthFirstSearchPostOrder(rootNode: BinaryTreeNode) {
    const result: number[] = [];
    depthFirstSearchRecursive(rootNode);

    function depthFirstSearchRecursive(node: BinaryTreeNode) {
        if (node.left) {
            depthFirstSearchRecursive(node.left);
        }
        if (node.right) {
            depthFirstSearchRecursive(node.right);
        }
        result.push(node.value);
    }
    return result;
}

export function depthFirstSearchInOrder(rootNode: BinaryTreeNode) {
    const result: number[] = [];
    depthFirstSearchRecursive(rootNode);

    function depthFirstSearchRecursive(node: BinaryTreeNode) {
        if (node.left) {
            depthFirstSearchRecursive(node.left);
        }
        result.push(node.value);
        if (node.right) {
            depthFirstSearchRecursive(node.right);
        }
    }
    return result;
}


