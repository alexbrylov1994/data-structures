// 146. LRU Cache

// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.

// Example 1:

// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// Explanation
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4

class DLinkedNode {
    value: any;
    key: any;
    prev: DLinkedNode;
    next: DLinkedNode;

    constructor(value = null, key = null, left = null, right = null) {
        this.value = value;
        this.key = key;
        this.prev = left;
        this.next = right;
    }
}


class LRUCache {
    head: DLinkedNode = new DLinkedNode();
    tail: DLinkedNode = new DLinkedNode();
    hashmap = {};
    maximumSize: number;

    constructor(capacity: number) {
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.maximumSize = capacity;
    }

    addNode(node) {
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

    moveToHead(node) {
        this.removeNode(node);
        this.addNode(node);
    }

    removeTail() {
        let prev = this.tail.prev.prev;
        this.tail.prev = prev;
        prev.next = this.tail;
    }

    get(key: number): number {
        if (this.hashmap[key]) {
            this.moveToHead(this.hashmap[key])
            return this.hashmap[key].value;
        } else {
            return -1;
        }
    }

    checkSize() {
        if (Object.keys(this.hashmap).length > this.maximumSize) {
            let tail = this.tail.prev;
            console.log('tail', this.tail);
            delete this.hashmap[tail.key];
            this.removeTail();
        }
    }

    put(key: number, value: number): void {
        if (this.hashmap[key]) {
            this.moveToHead(this.hashmap[key]);
            this.hashmap[key].value = value;
        } else {
            let newNode = new DLinkedNode(value, key);
            this.hashmap[key] = newNode;
            this.addNode(newNode);
            this.checkSize();
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

//  Time complexity : O(1) both for put and get.
//  Space complexity : O(capacity) since the space is used only for a hashmap and double linked list with at most capacity + 1 elements.


