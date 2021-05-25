// 142. Linked List Cycle II

// Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Notice that you should not modify the linked list.

// Example 1:

// Input: head = [3,2,0,-4], pos = 1
// Output: tail connects to node index 1
// Explanation: There is a cycle in the linked list, where tail connects to the second node.
// Example 2:

// Input: head = [1,2], pos = 0
// Output: tail connects to node index 0
// Explanation: There is a cycle in the linked list, where tail connects to the first node.
// Example 3:

// Input: head = [1], pos = -1
// Output: no cycle
// Explanation: There is no cycle in the linked list.

//   Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function detectCycle(head: ListNode | null): ListNode | null {
    if (!head) return null;

    let tortoise = head, hare = head;

    while (true) {
        tortoise = tortoise.next;
        hare = hare.next;

        if (hare === null || hare.next === null) {
            return null;
        } else {
            hare = hare.next;
        }

        if (tortoise === hare) break;
    }

    let p1 = head,
        p2 = tortoise;

    while (p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;
    }

    return p2
};
