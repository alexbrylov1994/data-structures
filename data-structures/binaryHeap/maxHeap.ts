export default class MaxBinaryHeap {
    // 2n+1 left child
    // 2n+2 right child 
    // (n-1)/2 floor, parent
    heap: number[];
    constructor() {
        this.heap = [];
        // this.values = [55, 39, 41, 18, 27, 12, 33];
    }

    insert(value) {
        this.heap.push(value);

        if (this.heap.length <= 1) {
            return;
        }

        this.bubbleUp(value, (this.heap.length - 1))
    }

    private bubbleUp(value, index) {
        if (index === 0) {
            return;
        }

        let parentIndex = this.getParent(index);
        if (value > this.heap[parentIndex]) {
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]]
            this.bubbleUp(value, parentIndex);
        }

    }

    getLeftChild(index: number): number {
        let child = (index * 2) + 1;
        return child < this.heap.length ? child : null;
    }

    getRightChild(index: number): number {
        let child = (index * 2) + 2;
        return child < this.heap.length ? child : null;
    }

    getParent(index: number): number {
        let parent = Math.floor((index - 1) / 2);
        return parent >= 0 ? parent : null;
    }

    extractMax(): number {

        [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]];
        let max = this.heap.pop();
        this.bubleDown(0);
        return max;
    }

    bubleDown(index) {
        if (!this.getRightChild(index) && !this.getLeftChild(index)) {
            return;
        }

        let child;
        if (this.heap[this.getLeftChild(index)] > this.heap[this.getRightChild(index)] || !this.getRightChild(index)) {
            child = this.getLeftChild(index);
        } else {
            child = this.getRightChild(index);
        }

        if (this.heap[child] > this.heap[index]) {
            [this.heap[index], this.heap[child]] = [this.heap[child], this.heap[index]];
            this.bubleDown(child);
        }
    }
}

let h = new MaxBinaryHeap();

h.insert(1);
h.insert(2);
h.insert(3);
h.insert(4);
h.insert(5);
h.insert(6);
h.insert(7);
h.insert(8);
h.insert(9);
console.log(h.extractMax());
console.log(h.extractMax());
console.log(h.extractMax());
console.log(h.extractMax());
console.log(h.extractMax());
console.log(h.extractMax());
console.log(h.extractMax());
console.log(h.extractMax());
console.log(h.extractMax());
