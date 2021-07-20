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

        //N
        while (heap.size()) {
            // LOG(K)
            let newNode = new ListNode(heap.pop())
            current.next = newNode;
            current = current.next;
        }

        return head;
    } else {
        return null
    };
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

// Time complexity: O(Nlogk) where k is the number of linked lists.
// - The comparison cost will be reduced to O(logk) for every pop and insertion to priority queue.But finding the node with the smallest value just costs O(1) time.
// - There are N nodes in the final linked list.

// Space complexity: O(N)
//     - O(n) Creating a new linked list costs O(n) space.
// - O(k) The code above present applies in -place method which cost O(1) space.And the priority queue(often implemented with heaps) costs O(k) space(it's far less than NN in most situations).

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
// Here's the heap (not uses, nodes and values to sort). Pardon the imperative style here, for brevity.

// class MinHeap {
//     constructor(){
//         this.heap = [null];
//         this.size = 0;
//     }

//     add(node) {
//         this.heap.push(node);
//         this.size++;
//         this.siftUp();
//     }

//     pop(){
//         if(this.size === 0) return null;
//         this.size--;
//         this.swap(1, this.heap.length -1);
//         let res =  this.heap.pop();
//         this.siftDown();
//         return res;
//     }

//     swap(i,j) {
//         [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
//     }

//     siftUp() {
//         let cI = this.heap.length - 1;
//         let pI = Math.floor(cI/2);
//         while (pI !== 0 && this.heap[pI].val > this.heap[cI].val) {
//             this.swap(pI, cI);
//             let temp = pI;
//             pI = Math.floor(pI/2);
//             cI = temp;
//         }
//     }

//     siftDown() {
//         let pI = 1;
//         let c1I = 2*pI;
//         let c2I = c1I + 1;
//         while (c1I < this.heap.length) {
//             let swapI;
//             if (c2I >= this.heap.length) { swapI = c1I;}
//             else {
//                 swapI = this.heap[c1I].val > this.heap[c2I].val ? c2I : c1I;
//             }
//             if (this.heap[pI].val < this.heap[swapI].val) {
//                 return;
//             } else {
//                 this.swap(swapI, pI);
//                 pI = swapI;
//                 c1I = 2* pI;
//                 c2I = c1I + 1;  
//             }
//         }
//     }    
// }