import { LinkedList } from "mnemonist";
// import LinkedList from '../linkedList/linkedList'

// export class Stack<T> {
//     private data: T[] = [];

//     push(el: T): void {
//         this.data.push(el);
//     }

//     pop(): T | undefined {
//        return this.data.pop();
//     }

//     size(): number {
//         return this.data.length;
//     }

//     isEmpty(): boolean {
//         return !!this.data.length;;
//     }
// }

export default class Stack {
    linkedList: LinkedList<string>;
    constructor() {
        this.linkedList = new LinkedList();
    }
    push(value) {
        this.linkedList.unshift(value);
    }

    pop() {
        return this.linkedList.shift();
    }

    peek() {
        if (!this.linkedList.size) {
            return null;
        }

        return this.linkedList.first
    }
}

const stack = new Stack();
stack.push('0');