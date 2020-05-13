export class Queue<T> {
    private data: T[] = [];

    enqueue(el: T): void {
        this.data.push(el);
    }

    dequeue(): T | undefined {
        return this.data.shift();
    }

    isEmpty() {
        return !!this.data.length;
    }

    size() {
        return this.data.length;
    }
}