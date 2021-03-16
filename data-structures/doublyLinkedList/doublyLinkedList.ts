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

    }
}