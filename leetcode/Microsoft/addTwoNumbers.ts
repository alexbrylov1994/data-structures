
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
// use stacks to get last ones, then pop and keep appending to head and make it new head
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let stack1 = [];
    let stack2 = [];
    while (l1) {
        stack1.push(l1.val);
        l1 = l1.next;
    }
    while (l2) {
        stack2.push(l2.val);
        l2 = l2.next;
    }
    let l3 = new ListNode(0);
    while (stack1.length || stack2.length) {
        let sum = 0;
        if (stack1.length) sum += stack1.pop();
        if (stack2.length) sum += stack2.pop();
        sum += l3.val;
        l3.val = sum % 10;
        let head = new ListNode(Math.floor(sum / 10));
        head.next = l3;
        l3 = head;
    }
    return (l3.val === 0) ? l3.next : l3;
};

// approach one 2: reverse both lists then start adding up
// class Solution {
//     public ListNode reverseList(ListNode head) {
//         ListNode last = null;
//         while (head != null) {
//             // keep the next node
//             ListNode tmp = head.next;
//             // reverse the link
//             head.next = last;
//             // update the last node and the current node
//             last = head;
//             head = tmp;    
//         }    
//         return last;
//     }

//     public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
//         // reverse lists
//         l1 = reverseList(l1);
//         l2 = reverseList(l2);

//         ListNode head = null;
//         int carry = 0;
//         while (l1 != null || l2 != null) {
//             // get the current values 
//             int x1 = l1 != null ? l1.val : 0;
//             int x2 = l2 != null ? l2.val : 0;

//             // current sum and carry
//             int val = (carry + x1 + x2) % 10;
//             carry = (carry + x1 + x2) / 10;

//             // update the result: add to front
//             ListNode curr = new ListNode(val);
//             curr.next = head;
//             head = curr;

//             // move to the next elements in the lists
//             l1 = l1 != null ? l1.next : null;
//             l2 = l2 != null ? l2.next : null;
//         }

//         if (carry != 0) {
//             ListNode curr = new ListNode(carry);
//             curr.next = head;
//             head = curr;
//         }

//         return head;
//     }
// }