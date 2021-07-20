// 23. Merge k Sorted Lists

// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []


//   Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (!lists.length) {
        return null;
    }
    let heap = new MinHeap()
    for (let head of lists) {
        while (head) {
            heap.add(head.val);
            head = head.next;
        }
    }

    if (heap.size()) {

        let head = new ListNode(heap.pop());
        let current = head;

        while (heap.size()) {
            let newNode = new ListNode(heap.pop())
            current.next = newNode;
            current = current.next;
        }

        return head;
    } else {
        return null
    };
};

// var mergeKLists = function(lists) {
//     if (!lists.length) return null;
//     let minHeap = new MinHeap();
//     for (let node of lists) {
//         if (node) {
//             minHeap.add(node);
//         }
//     }
//     let head = null;
//     let cur;
//     while (minHeap.size) {
//         let node = minHeap.pop();
//         if (head) {
//             cur.next = new ListNode(node.val);
//             cur = cur.next;
//         } else {
//             head = new ListNode(node.val);
//             cur = head;
//         }
//         if (node.next) {
//             minHeap.add(node.next);
//         }
//     }
//     return head;
// };
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
