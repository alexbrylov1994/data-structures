// 460. LFU Cache

// Design and implement a data structure for a Least Frequently Used (LFU) cache.

// Implement the LFUCache class:

// LFUCache(int capacity) Initializes the object with the capacity of the data structure.
// int get(int key) Gets the value of the key if the key exists in the cache. Otherwise, returns -1.
// void put(int key, int value) Update the value of the key if present, or inserts the key if not already present. When the cache reaches its capacity, it should invalidate and remove the least frequently used key before inserting a new item. For this problem, when there is a tie (i.e., two or more keys with the same frequency), the least recently used key would be invalidated.
// To determine the least frequently used key, a use counter is maintained for each key in the cache. The key with the smallest use counter is the least frequently used key.

// When a key is first inserted into the cache, its use counter is set to 1 (due to the put operation). The use counter for a key in the cache is incremented either a get or put operation is called on it.

// The functions get and put must each run in O(1) average time complexity.

// Example 1:

// Input
// ["LFUCache", "put", "put", "get", "put", "get", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, 3, null, -1, 3, 4]

// Explanation
// // cnt(x) = the use counter for key x
// // cache=[] will show the last used order for tiebreakers (leftmost element is  most recent)
// LFUCache lfu = new LFUCache(2);
// lfu.put(1, 1);   // cache=[1,_], cnt(1)=1
// lfu.put(2, 2);   // cache=[2,1], cnt(2)=1, cnt(1)=1
// lfu.get(1);      // return 1
//                  // cache=[1,2], cnt(2)=1, cnt(1)=2
// lfu.put(3, 3);   // 2 is the LFU key because cnt(2)=1 is the smallest, invalidate 2.
//                  // cache=[3,1], cnt(3)=1, cnt(1)=2
// lfu.get(2);      // return -1 (not found)
// lfu.get(3);      // return 3
//                  // cache=[3,1], cnt(3)=2, cnt(1)=2
// lfu.put(4, 4);   // Both 1 and 3 have the same cnt, but 1 is LRU, invalidate 1.
//                  // cache=[4,3], cnt(4)=1, cnt(3)=2
// lfu.get(1);      // return -1 (not found)
// lfu.get(3);      // return 3
//                  // cache=[3,4], cnt(4)=1, cnt(3)=3
// lfu.get(4);      // return 4
//                  // cache=[3,4], cnt(4)=2, cnt(3)=3

// The idea
// Use one hashmap nodeHash to store information between key:node
// Use another hashmap freqHash to store information between freq:dll (doublylinkedlist)
// Use Doublylinkedlist to store a LRU for a given freq
// I use dummy head&tail for easier implementation

// hopefully won't see in interview, seniors might 
class LinkedListNode {
    key: number;
    val: number;
    next: LinkedListNode;
    freq: number;
    prev: LinkedListNode;

    constructor(key: number, value: number) {
        this.key = key;
        this.val = value;
        this.next = null;
        this.prev = null;
        this.freq = 1;
    }
}

class DoublyLinkedList {
    head: LinkedListNode;
    tail: LinkedListNode;
    constructor() {
        this.head = new LinkedListNode(null, null);
        this.tail = new LinkedListNode(null, null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    insertHead(node) {
        node.prev = this.head;
        node.next = this.head.next;
        this.head.next.prev = node;
        this.head.next = node;
    }

    removeNode(node) {
        let prev = node.prev;
        let next = node.next;
        prev.next = next;
        next.prev = prev;
    }

    removeTail() {
        let node = this.tail.prev;
        this.removeNode(node);
        return node.key;
    }

    isEmpty() {
        return this.head.next.val == null;
    }
}

class LFUCache {
    capacity: number;
    currentSize: number;
    leastFreq: number;
    nodeHash: Map<number, LinkedListNode>;
    freqHash: Map<number, DoublyLinkedList>;
    constructor(capacity: number) {
        this.capacity = capacity;
        this.currentSize = 0;
        this.leastFreq = 0;
        this.nodeHash = new Map();
        this.freqHash = new Map();
    }

    get(key: number): number {
        let node = this.nodeHash.get(key);
        if (!node) return -1;
        this.freqHash.get(node.freq).removeNode(node);
        if (node.freq == this.leastFreq && this.freqHash.get(node.freq).isEmpty()) this.leastFreq++
        node.freq++;
        // freqHash housekeeping
        if (this.freqHash.get(node.freq) == null) this.freqHash.set(node.freq, new DoublyLinkedList())
        this.freqHash.get(node.freq).insertHead(node);
        return node.val;
    }

    put(key: number, value: number): void {
        if (this.capacity == 0) return;
        let node = this.nodeHash.get(key);
        if (!node) { // new node
            this.currentSize++;
            if (this.currentSize > this.capacity) {
                let tailKey = this.freqHash.get(this.leastFreq).removeTail();
                this.nodeHash.delete(tailKey);
                this.currentSize--;
            }
            let newNode = new LinkedListNode(key, value);
            // freqHash housekeeping
            if (this.freqHash.get(1) == null) this.freqHash.set(1, new DoublyLinkedList())
            this.freqHash.get(1).insertHead(newNode);

            this.nodeHash.set(key, newNode);
            this.leastFreq = 1;

        } else { // existed node
            node.val = value;
            this.freqHash.get(node.freq).removeNode(node);
            if (node.freq == this.leastFreq && this.freqHash.get(node.freq).isEmpty()) this.leastFreq++;
            node.freq++;
            // freqHash housekeeping
            if (this.freqHash.get(node.freq) == null) this.freqHash.set(node.freq, new DoublyLinkedList())
            this.freqHash.get(node.freq).insertHead(node);
        }
    }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */