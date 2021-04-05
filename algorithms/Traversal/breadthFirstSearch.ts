import BinarySearchTree from '../../data-structures/binarySearchTree/binarySearchTree';
import BinaryTreeNode from '../../data-structures/binarySearchTree/binarySearchTreeNode';

class Queue {
    queue: BinaryTreeNode[];
    constructor() {
        this.queue = [];
    }

    enqueue(value): void {
        this.queue.push(value);
    }

    dequeue(): BinaryTreeNode {
        return this.queue.shift();
    }

    length(): number {
        return this.queue.length;
    }
}


export default function breadthFirstSearch(rootNode: BinaryTreeNode): number[] {

    const nodeQueue = new Queue();
    const visited = [];

    nodeQueue.enqueue(rootNode);
    console.log('hello');
    while (nodeQueue.length()) {
        const currentNode = nodeQueue.dequeue();
        visited.push(currentNode.value);

        if (currentNode.left) {
            nodeQueue.enqueue(currentNode.left);
        }
        if (currentNode.right) {
            nodeQueue.enqueue(currentNode.right);
        }
    }

    return visited;
}