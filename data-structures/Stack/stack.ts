// import { LinkedList } from "mnemonist";
import LinkedList from '../linkedList/linkedList'

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
    linkedList: LinkedList;
    constructor() {
        this.linkedList = new LinkedList();
    }
    push(value) {
        this.linkedList.prepend(value);
    }

    pop() {
        return this.linkedList.deleteHead().value;
    }

    peek() {
        if (!this.linkedList.head) {
            return null;
        }

        return this.linkedList.head.value
    }
}
