class MinHeap {

    heap: number[];

    constructor() {
        this.heap = [];
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

    pop(): number {
        [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]];
        let min = this.heap.pop();
        this.bubbleDown(0);
        return min;
    }

    bubbleDown(index: number) {
        if (!this.getRightChild(index) && !this.getLeftChild(index)) {
            return;
        }

        let child;
        if (this.heap[this.getLeftChild(index)] < this.heap[this.getRightChild(index)] || !this.getRightChild(index)) {
            child = this.getLeftChild(index);
        } else {
            child = this.getRightChild(index);
        }

        if (this.heap[child] < this.heap[index]) {
            [this.heap[index], this.heap[child]] = [this.heap[child], this.heap[index]];
            this.bubbleDown(child);
        }

    }

    add(val: number) {
        this.heap.push(val);

        this.bubbleUp(this.heap.length - 1);
    }

    bubbleUp(index: number) {
        if (index === 0) {
            return;
        }

        let parent = this.getParent(index);

        if (this.heap[index] < this.heap[parent]) {
            [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
            this.bubbleUp(parent);
        }
    }

    size() {
        return this.heap.length;
    }
}

let heap = new MinHeap();
heap.add(1);
heap.add(4);
heap.add(5);
heap.add(1);
heap.add(3);
heap.add(4);
heap.add(2);
heap.add(6);

console.log(heap.heap);

console.log(heap.pop());
console.log(heap.heap);
console.log(heap.pop());
console.log(heap.heap);
console.log(heap.pop());
console.log(heap.heap);
console.log(heap.pop());
console.log(heap.heap);
console.log(heap.pop());
console.log(heap.heap);
console.log(heap.pop());
console.log(heap.heap);
console.log(heap.pop());
console.log(heap.heap);
console.log(heap.pop());
console.log(heap.heap);