import LinkedListNode from "./linkedListNode";

export default class LinkedList {
    head: LinkedListNode;
    tail: LinkedListNode;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const node = new LinkedListNode(value);

        if (!this.head) {
            this.head = node;
        }

        if (this.tail) {
            this.tail.next = node;
        }

        this.tail = node;
    }

    prepend(value) {
        const node = new LinkedListNode(value);

        if (!this.head) {
            this.head = node;
        }

        if (this.head) {
            node.next = this.head;
            this.head = node;
        }
    }

    // at index
    insert(index, value) {
        if (index === 0) {
            this.prepend(value);
            return;
        }

        let i = 0;
        let cur = this.head;
        // look for previous so we can point him to new node
        const prev = index - 1;
        while (i <= prev && cur) {
            if (i === prev) {
                const node = new LinkedListNode(value);

                let next = cur.next;
                cur.next = node;
                node.next = next;
            }
            i++;
            cur = cur.next;
        }

        if (i !== prev) {
            console.log('Index must be greater than the Linked List');
        }

    }

    removeValue(value) {
        if (!this.head) {
            console.log('Linked List is empty');
            return;
        }

        let deletedNode = null;

        // Head case 
        if (this.head.value === value) {
            deletedNode = this.head;
            this.head = this.head.next;
            return deletedNode;
        }

        let currentNode = this.head;

        // If next node must be deleted then make next node to be a next next one.
        while (currentNode.next) {
            if (currentNode.next.value === value) {
                deletedNode = currentNode.next;
                currentNode.next = currentNode.next.next;
                return deletedNode;
            } else {
                currentNode = currentNode.next;
            }
        }

        // Check if tail must be deleted.
        if (this.tail.value === value) {
            deletedNode = this.tail;
            this.tail = currentNode;
            return deletedNode;
        }
    }

    removeIndex(index) {
        if (!this.head) {
            console.log('Linked List is empty');
            return;
        }

        let position = index - 1;
        let i = 0;
        let cur = this.head;
        while (cur.next) {
            if (i === position) {
                cur.next = cur.next.next;
            }

            i++;
            cur = cur.next;
        }

    }

    deleteTail() {
        if (this.head === this.tail) {
            // There is only one node in linked list.
            this.head = null;
            this.tail = null;
        }

        let currentNode = this.head;
        while (currentNode.next) {
            if (!currentNode.next.next) {
                currentNode.next = null;
            } else {
                currentNode = currentNode.next;
            }
        }

        this.tail = currentNode;
    }

    deleteHead() {
        if (!this.head) {
            return null;
        }

        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
            this.tail = null;
        }
    }

    find(index) {
        let i = 0;

        if (!this.head) {
            return null;
        }

        let cur = this.head;

        while (cur) {
            if (index === i) {
                return cur;
            }
            i++
            cur = cur.next
        }
    }

    update(index, value) {
        let node = this.find(index);

        if (node) {
            node.value = value;
        }
    }

    reverse() {
        let currNode = this.head;
        let prevNode = null;
        let nextNode = null;

        while (currNode) {
            // Store next node.
            nextNode = currNode.next;

            // Change next node of the current node so it would link to previous node.
            currNode.next = prevNode;

            // Move prevNode and currNode nodes one step forward.
            prevNode = currNode;
            currNode = nextNode;
        }

        // Reset head and tail.
        this.tail = this.head;
        this.head = prevNode;
    }

    reverseRecursion(node: LinkedListNode) {
        if (node === null) {
            return null;
        }
        if (node.next === null) {
            this.head = node;
            return node;
        }

        const nextNode = this.reverseRecursion(node.next);

        nextNode.next = node;
        node.next = null;
        this.tail = node;

        return node;
    }
}

// const linkedList = new LinkedList();
// linkedList.append(1);
// linkedList.append(2);
// linkedList.append(3);
// linkedList.append(4);
// linkedList.reverseRecursion(linkedList.head);
// // console.log('update ', linkedList.update(0, 69));
// console.log('list: ', linkedList);