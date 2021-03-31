export default class BinaryTreeNode {
    value: number;
    left: BinaryTreeNode;
    right: BinaryTreeNode;
    constructor(value = null) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}