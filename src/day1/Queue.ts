type Node<T> = {
    val: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private front?: Node<T>;
    private back?: Node<T>;

    constructor() {
        this.length = 0;
        this.front = undefined;
        this.back = undefined;
    }

    enqueue(item: T): void {
        const elt = { val: item } as Node<T>;
        this.length++;

        if (!this.back) {
            this.back = this.front = elt;
            return;
        }

        this.back.next = elt;
        this.back = elt;
    }

    deque(): T | undefined {
        if (!this.front) {
            return undefined;
        }

        this.length--;

        const front = this.front;
        this.front = this.front.next;

        if (!this.front) {
            this.back = undefined;
        }

        const val = front.val;
        // free memory
        front.next = undefined;

        return val;
    }

    peek(): T | undefined {
        return this.front?.val;
    }
}
