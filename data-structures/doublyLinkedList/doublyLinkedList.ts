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

    find(value) {
        if (!this.head) {
            return null
        }

        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            } else {
                currentNode = currentNode.next;
            }
        }

        return null;
    }

    insert(index, value) {
        let currentNode = this.head;
        let i = 0;

        if (!this.head) {
            return null;
        }

        if (index === 0) {
            const newNode = new DoublyLinkedListNode(value);

            newNode.next = this.head;
            this.head.previous = newNode;

            this.head = newNode;
            return;
        }

        while (i < index && currentNode) {
            i++;
            currentNode = currentNode.next;
        }

        if (i < index) {
            return null;
        } else {
            const newNode = new DoublyLinkedListNode(value);
            const prevNode = currentNode.previous;
            prevNode.next = newNode;
            newNode.previous = prevNode;

            newNode.next = currentNode
            currentNode.previous = newNode;

        }

    }

    update(index, value) {
        let currentNode = this.head;
        let i = index;

        while (i < index && currentNode) {
            i++;
            currentNode = currentNode.next;
        }

        if (i < index) {
            return null;
        } else {
            currentNode.value = value;
        }
    }

    reverse() {
        let currNode = this.head;
        let prevNode = null;
        let nextNode = null;

        while (currNode) {
            // Store next node.
            nextNode = currNode.next;
            prevNode = currNode.previous;

            // Change next node of the current node so it would link to previous node.
            currNode.next = prevNode;
            currNode.previous = nextNode;

            // Move prevNode and currNode nodes one step forward.
            prevNode = currNode;
            currNode = nextNode;
        }

        // Reset head and tail.
        this.tail = this.head;
        this.head = prevNode;
    }

    delete(value) {
        if (!this.head) {
            return null;
        }

        let deletedNode = null;
        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.value === value) {
                deletedNode = currentNode;

                if (deletedNode === this.head) {
                    // If HEAD is going to be deleted...

                    // Set head to second node, which will become new head.
                    this.head = deletedNode.next;

                    // Set new head's previous to null.
                    if (this.head) {
                        this.head.previous = null;
                    }

                    // If all the nodes in list has same value that is passed as argument
                    // then all nodes will get deleted, therefore tail needs to be updated.
                    if (deletedNode === this.tail) {
                        this.tail = null;
                    }
                } else if (deletedNode === this.tail) {
                    // If TAIL is going to be deleted...

                    // Set tail to second last node, which will become new tail.
                    this.tail = deletedNode.previous;
                    this.tail.next = null;
                } else {
                    // If MIDDLE node is going to be deleted...
                    const previousNode = deletedNode.previous;
                    const nextNode = deletedNode.next;

                    previousNode.next = nextNode;
                    nextNode.previous = previousNode;
                }
            }

            currentNode = currentNode.next;
        }

        return deletedNode;
    }
}
