export default class Queue<T> {
    public length: number;
    private first: Node<T> | undefined;
    private last: Node<T> | undefined;

    constructor() {
        this.length = 0;
        this.first = undefined;
        this.last = undefined;
    }

    enqueue(item: T): void {
        this.length++;

        if (this.last === undefined) {
            this.last = { val: item, next: undefined };
            this.first = this.last;
            return;
        }

        this.last.next = { val: item, next: undefined };
        this.last = this.last.next;
    }

    deque(): T | undefined {
        if (this.length === 0) {
            return undefined;
        }

        const result = this.first?.val;

        this.first = this.first?.next;
        this.length--;
        if (this.length === 0) {
            this.first = undefined;
            this.last = undefined;
        }

        return result;
    }

    peek(): T | undefined {
        return this.first?.val;
    }
}

type Node<T> = {
    val: T;
    next?: Node<T>;
};
