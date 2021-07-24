// 1167. Minimum Cost to Connect Sticks

// You have some number of sticks with positive integer lengths. These lengths are given as an array sticks, where sticks[i] is the length of the ith stick.

// You can connect any two sticks of lengths x and y into one stick by paying a cost of x + y. You must connect all the sticks until there is only one stick remaining.

// Return the minimum cost of connecting all the given sticks into one stick in this way.

// Example 1:

// Input: sticks = [2,4,3]
// Output: 14
// Explanation: You start with sticks = [2,4,3].
// 1. Combine sticks 2 and 3 for a cost of 2 + 3 = 5. Now you have sticks = [5,4].
// 2. Combine sticks 5 and 4 for a cost of 5 + 4 = 9. Now you have sticks = [9].
// There is only one stick left, so you are done. The total cost is 5 + 9 = 14.
// Example 2:

// Input: sticks = [1,8,3,5]
// Output: 30
// Explanation: You start with sticks = [1,8,3,5].
// 1. Combine sticks 1 and 3 for a cost of 1 + 3 = 4. Now you have sticks = [4,8,5].
// 2. Combine sticks 4 and 5 for a cost of 4 + 5 = 9. Now you have sticks = [9,8].
// 3. Combine sticks 9 and 8 for a cost of 9 + 8 = 17. Now you have sticks = [17].
// There is only one stick left, so you are done. The total cost is 4 + 9 + 17 = 30.
// Example 3:

// Input: sticks = [5]
// Output: 0xq
// Explanation: There is only one stick, so you don't need to do anything. The total cost is 0.

function connectSticks(sticks: number[]): number {
    let heap = new MinHeap();

    for (let stick of sticks) {
        heap.add(stick);
    }

    let minSum = 0;

    while (heap.size() >= 2) {
        let num1 = heap.pop();
        let num2 = heap.pop();

        minSum += num1 + num2;

        heap.add((num1 + num2));
    }

    // eventho one remains in heap, the number was added when we calculate last 2 

    return minSum;

};

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

// Time complexity: O(NlogN), where NN is the length of the input array.Let's break it down:

// Step 1) Adding NN elements to the priority queue will be O(NlogN).

// Step 2) We remove two of the smallest elements and then add one element to the priority queue until we are left with one element.Since each such operation will reduce one element from the priority queue, we will perform N - 1N−1 such operations.Now, we know that both add and remove operations take O(\log{ N })O(logN) in priority queue, therefore, complexity of this step will be O(NlogN).

// Space complexity: O(N) since we will store NN elements in our priority queue.