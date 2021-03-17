import DoublyLinkedListNode from "./doublyLinkedListNode";

export default class DoublyLinkedList {
    head: DoublyLinkedListNode;
    tail: DoublyLinkedListNode;
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new DoublyLinkedListNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;
    }

    prepend(value) {
        const newNode = new DoublyLinkedListNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.head.previous = newNode;
        newNode.next = this.head;
        this.head = newNode;
    }

    deleteTail() {
        if (!this.tail) {
            // No tail to delete.
            return null;
        }
        const deletedTail = this.tail;

        if (this.head === this.tail) {
            // There is only one node in linked list.
            this.head = null;
            this.tail = null;
            return deletedTail;
        }
        // If there are many nodes in linked list...
        this.tail = this.tail.previous;
        this.tail.next = null;

        return deletedTail;
    }

    deleteHead() {
        if (!this.head) {
            return null;
        }

        const deletedHead = this.head;

        if (this.head.next) {
            this.head = this.head.next;
            this.head.previous = null;
        } else {
            this.head = null;
            this.tail = null;
        }

        return deletedHead;
    }
}

const list = new DoublyLinkedList();
list.append(1);
list.append(2);
list.append(3);

list.prepend(0);
console.log(list);