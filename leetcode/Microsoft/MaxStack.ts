// 716. Max Stack

// Design a max stack data structure that supports the stack operations and supports finding the stack's maximum element.

// Implement the MaxStack class:

// MaxStack() Initializes the stack object.
// void push(int x) Pushes element x onto the stack.
// int pop() Removes the element on top of the stack and returns it.
// int top() Gets the element on the top of the stack without removing it.
// int peekMax() Retrieves the maximum element in the stack without removing it.
// int popMax() Retrieves the maximum element in the stack and removes it. If there is more than one maximum element, only remove the top-most one.

// Example 1:

// Input
// ["MaxStack", "push", "push", "push", "top", "popMax", "top", "peekMax", "pop", "top"]
// [[], [5], [1], [5], [], [], [], [], [], []]
// Output
// [null, null, null, null, 5, 5, 1, 5, 1, 5]

// Explanation
// MaxStack stk = new MaxStack();
// stk.push(5);   // [5] the top of the stack and the maximum number is 5.
// stk.push(1);   // [5, 1] the top of the stack is 1, but the maximum is 5.
// stk.push(5);   // [5, 1, 5] the top of the stack is 5, which is also the maximum, because it is the top most one.
// stk.top();     // return 5, [5, 1, 5] the stack did not change.
// stk.popMax();  // return 5, [5, 1] the stack is changed now, and the top is different from the max.
// stk.top();     // return 1, [5, 1] the stack did not change.
// stk.peekMax(); // return 5, [5, 1] the stack did not change.
// stk.pop();     // return 1, [5] the top of the stack and the max element is now 5.
// stk.top();     // return 5, [5] the stack did not change.

class MaxStack {
    stack: any[];
    maxStack: any[];

    constructor() {
        this.stack = []
        this.maxStack = []
    }

    push(x) {
        this.stack.push(x)
        if (!this.maxStack.length) this.maxStack.push(x);
        else this.maxStack.push(Math.max(x, this.peekMax()))
    }

    pop() {
        this.maxStack.pop()
        return this.stack.pop()
    }

    top() {
        return this.stack[this.stack.length - 1]
    }

    peekMax() {
        return this.maxStack[this.maxStack.length - 1]
    }

    popMax() {
        const buffer = []
        const max = this.peekMax()

        while (this.top() !== max) buffer.push(this.pop())
        this.pop();
        while (buffer.length) this.push(buffer.pop());

        return max;
    }
}

// Time Complexity: O(N) for the popMax operation, and O(1) for the other operations, where N is the number of operations performed.

// Space Complexity: O(N), the maximum size of the stack.