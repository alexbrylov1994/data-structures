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
            this.tail = node;
        }

        this.tail.next = node;
        this.tail = node;
    }

    prepend() {

    }

    insert() {

    }

    remove() {

    }



}