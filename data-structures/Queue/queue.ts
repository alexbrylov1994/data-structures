import { LinkedList } from 'mnemonist';
// export class Queue<T> {
//     private data: T[] = [];

//     enqueue(el: T): void {
//         this.data.push(el);
//     }

//     dequeue(): T | undefined {
//         return this.data.shift();
//     }

//     isEmpty() {
//         return !!this.data.length;
//     }

//     size() {
//         return this.data.length;
//     }
// }

export default class Queue {
    linkedList: LinkedList<string>;
    constructor() {
        this.linkedList = new LinkedList();
    }
    enqueue(value) {
        this.linkedList.push(value);
    }

    dequeue() {
        return this.linkedList.shift();
    }

    peek() {
        if (!this.linkedList.size) {
            return null;
        }

        return this.linkedList.first;
    }
}