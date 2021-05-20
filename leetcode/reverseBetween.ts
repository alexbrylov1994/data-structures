// 92. Reverse Linked List II

// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

// Example 1:

// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]

// Example 2:

// Input: head = [5], left = 1, right = 1
// Output: [5]


//   Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    let currentPos = 1
    let currentNode: ListNode = head;
    let start = head;

    while (currentPos < left) {
        start = currentNode;
        currentNode = currentNode.next;
        currentPos++;
    }

    let newList = null, tail = currentNode;

    while (currentPos >= left && currentPos <= right) {
        const next = currentNode.next;
        currentNode.next = newList;
        newList = currentNode;
        currentNode = next;
        currentPos++;
    }

    start.next = newList;
    tail.next = currentNode;

    if (left > 1) {
        return head
    } else {
        return newList;
    }
}