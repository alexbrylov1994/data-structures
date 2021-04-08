import PriorityNode from "./priorityNode";

export default class PriorityQueue {
    values: PriorityNode[]

    constructor() {
        this.values = [];
    }

    enquque(value, pririty) {
        let newNode = new PriorityNode(value, pririty);

        this.values.push(newNode);

        if (this.values.length <= 1) {
            return;
        }

        this.bubbleUp(newNode, (this.values.length - 1))
    }

    private bubbleUp(node: PriorityNode, index: number) {
        if (index === 0) {
            return;
        }

        let parentIndex = this.getParentIndex(index);
        if (node.priority < this.values[parentIndex].priority) {
            [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]]
            this.bubbleUp(node, parentIndex);
        }

    }

    getParentIndex(index): number {
        return Math.floor((index - 1) / 2);
    }

    getLeftChild(index): number {
        return (2 * index + 1);
    }

    getRightChild(index): number {
        return (2 * index + 2);
    }

    dequque() {

        if (!this.values.length) {
            return;
        } else if (this.values.length <= 2) {
            // if we have 1 element, becomes empty
            // if we have 2 elements, 2nd element becomes root
            this.values.shift();
            return;
        }

        [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]]
        this.values.pop();

        this.bubleDown(0);
    }

    bubleDown(index) {
        if (this.getLeftChild(index) > (this.values.length - 1) && this.getRightChild(index) > (this.values.length - 1)) {
            return;
        }

        let greaterChild;
        if (this.getLeftChild(index) > (this.values.length - 1)) {
            greaterChild = this.getRightChild(index);
        } if (this.getRightChild(index) > (this.values.length - 1)) {
            greaterChild = this.getLeftChild(index);
        } else if (this.values[this.getLeftChild(index)].priority < this.values[this.getRightChild(index)].priority) {
            greaterChild = this.getLeftChild(index);
        } else {
            greaterChild = this.getRightChild(index);
        }

        if (this.values[index].priority > this.values[greaterChild].priority) {
            [this.values[index], this.values[greaterChild]] = [this.values[greaterChild], this.values[index]];
            this.bubleDown(greaterChild);
        }
    }
}
