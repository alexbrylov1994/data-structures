import LinkedList from '../linkedList/linkedList'

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
    linkedList: LinkedList;
    constructor() {
        this.linkedList = new LinkedList();
    }
    enqueue(value) {
        this.linkedList.append(value);
    }

    dequeue() {
        return this.linkedList.deleteHead();
    }

    peek() {
        if (!this.linkedList.head) {
            return null;
        }

        return this.linkedList.head.value;
    }
}