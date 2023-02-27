export default class Queue<T> {
    public length: number;
    private data: T[];

    constructor() {
        this.length = 0;
        this.data = [];
    }

    enqueue(item: T): void {
        this.data.push(item);
        this.length += 1;
    }

    deque(): T | undefined {
        if (this.data.length > 0) {
            this.length -= 1;
        }
        return this.data.shift();
    }

    peek(): T | undefined {
        if (this.data.length === 0) {
            return undefined;
        }
        return this.data[0];
    }
}
