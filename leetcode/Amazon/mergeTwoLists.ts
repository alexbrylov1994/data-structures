// 21. Merge Two Sorted Lists

// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

// Example 1:

// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: l1 = [], l2 = []
// Output: []
// Example 3:

// Input: l1 = [], l2 = [0]
// Output: [0]


class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {

    let finalList = new ListNode(-1);
    let currPointer = finalList;

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            currPointer.next = new ListNode(l1.val);
            l1 = l1.next;
        } else {
            currPointer.next = new ListNode(l2.val);
            l2 = l2.next;
        }

        currPointer = currPointer.next;
    }

    while (l1) {
        currPointer.next = new ListNode(l1.val);
        currPointer = currPointer.next;
        l1 = l1.next;
    }

    while (l2) {
        currPointer.next = new ListNode(l2.val);
        currPointer = currPointer.next;
        l2 = l2.next;
    }

    return finalList.next;
};

// Time  O(n + m)

// Space: O(1)