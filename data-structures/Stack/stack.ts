export class Stack<T> {
    private data: T[] = [];

    push(el: T): void {
        this.data.push(el);
    }

    pop(): T | undefined {
       return this.data.pop();
    }

    size(): number {
        return this.data.length;
    }

    isEmpty(): boolean {
        return !!this.data.length;;
    }
}