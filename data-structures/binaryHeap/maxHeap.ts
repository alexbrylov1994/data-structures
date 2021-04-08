export default class MaxBinaryHeap {
    // 2n+1 left child
    // 2n+2 right child 
    // (n-1)/2 floor, parent
    values: number[];
    constructor() {
        this.values = [];
        // this.values = [41, 39, 33, 18, 27, 12];
    }

    insert(value) {
        this.values.push(value);

        if (this.values.length <= 1) {
            return;
        }

        this.bubbleUp(value, (this.values.length - 1))
    }

    private bubbleUp(value, index) {
        if (index === 0) {
            return;
        }

        let parentIndex = this.getParentIndex(index);
        if (value > this.values[parentIndex]) {
            [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]]
            this.bubbleUp(value, parentIndex);
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

    extractMax() {

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
        } else if (this.values[this.getLeftChild(index)] > this.values[this.getRightChild(index)]) {
            greaterChild = this.getLeftChild(index);
        } else {
            greaterChild = this.getRightChild(index);
        }

        if (this.values[index] < this.values[greaterChild]) {
            [this.values[index], this.values[greaterChild]] = [this.values[greaterChild], this.values[index]];
            this.bubleDown(greaterChild);
        }
    }

}
