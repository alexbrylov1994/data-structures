// 138. Copy List with Random Pointer

// Share
// A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

// Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

// For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

// Return the head of the copied linked list.

// The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

// val: an integer representing Node.val
// random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
// Your code will only be given the head of the original linked list.


class Node {
    val: number
    next: Node | null
    random: Node | null
    constructor(val?: number, next?: Node, random?: Node) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
        this.random = (random === undefined ? null : random)
    }
}

function copyRandomList(head: Node | null): Node | null {
    const map = new Map([[null, null]]);

    let node = head;

    while (node) {
        map.set(node, new Node(node.val, null, null));
        node = node.next;
    }

    node = head;

    while (node) {
        const newNode = map.get(node);
        // newNode is a reference to the node,
        // so we can use it to set it's next and random
        newNode.next = map.get(node.next);
        newNode.random = map.get(node.random);
        node = node.next;
    }

    return map.get(head);
};

function copyRandomList2(head: Node | null): Node | null {
    const map = new Map([[null, null]]);

    let node = head;

    // fist pass, take each node and create a copy of node
    while (node) {
        map.set(node, new Node(node.val, null, null));
        node = node.next;
    }

    node = head;
    // we can't point to a random node that's ahead so we have a fist pass above 
    let newLD = null;
    let curNode = newLD;
    while (node) {
        const newNode = map.get(node);
        newNode.next = map.get(node.next);
        newNode.random = map.get(node.random);
        if (newLD) {
            curNode.next = newNode;
            curNode = curNode.next;
        } else {
            newLD = newNode;
            curNode = newLD;
        }
        node = node.next;
    }

    return newLD;
};


