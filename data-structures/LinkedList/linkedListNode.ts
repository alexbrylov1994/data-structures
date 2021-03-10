
export default class LinkedListNode {
    value: any;
    next: LinkedListNode;

    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}