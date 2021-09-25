// 708. Insert into a Sorted Circular Linked List

// Given a Circular Linked List node, which is sorted in ascending order, write a function to insert a value insertVal into the list such that it remains a sorted circular list. The given node can be a reference to any single node in the list and may not necessarily be the smallest value in the circular list.

// If there are multiple suitable places for insertion, you may choose any place to insert the new value. After the insertion, the circular list should remain sorted.

// If the list is empty (i.e., the given node is null), you should create a new single circular list and return the reference to that single node. Otherwise, you should return the originally given node.


// Example 1:


// Input: head = [3,4,1], insertVal = 2
// Output: [3,4,1,2]
// Explanation: In the figure above, there is a sorted circular list of three elements. You are given a reference to the node with value 3, and we need to insert 2 into the list. The new node should be inserted between node 1 and node 3. After the insertion, the list should look like this, and we should still return node 3.

// Example 2:

// Input: head = [], insertVal = 1
// Output: [1]
// Explanation: The list is empty (given head is null). We create a new single circular list and return the reference to that single node.
// Example 3:

// Input: head = [1], insertVal = 0
// Output: [1,0]

class Node {
    val: number
    next: Node | null
    constructor(val?: number, next?: Node) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}


function insert(head: Node | null, insertVal: number): Node | null {
    if (!head) {
        const head = new Node(insertVal);
        head.next = head;
        return head;
    }
    let curr = head, flag = false;
    while (true) {
        if ((curr.next.val >= insertVal && curr.val < insertVal)
            || (curr.next.val >= insertVal && curr.val > curr.next.val)
            || (curr.val <= insertVal && curr.val > curr.next.val)) {
            flag = true;
            break;
        }
        if (head === curr.next) {
            break;
        }
        curr = curr.next;
    }
    curr.next = new Node(insertVal, curr.next);
    return head;
}

// Time O(n) space O(1)

// var insert = function(head, insertVal) {
//     // 1. Edge Case.
//     if(head === null) {
//         return new Node(insertVal);
//     }

//     let prev = head, cur = prev.next;
//     // 2. Loop ends where we can't find an insert point, this happens all values are the same.
//     while(cur != head) {
//         // 3. We are at the sorted Pivot, we can decide if our insertion point is the new Pivot
//         if(prev.val > cur.val) {
//             if(insertVal >= prev.val || insertVal <= cur.val) break;
//         }

//         // 4. finally we found an insertion point where prev.val < insertVal < cur.val
//         if(prev.val < insertVal && insertVal <= cur.val) break;
//         prev = cur;
//         cur = cur.next;
//     }

//     prev.next = new Node(insertVal, cur);
//     return head;
// };