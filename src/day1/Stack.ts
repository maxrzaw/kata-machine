type Node<T> = {
    val: T,
    prev?: Node<T>,
}
export default class Stack<T> {
    public length: number;
    private top?: Node<T>;



    constructor() {
        this.length = 0;
    }

    push(item: T): void {
        const node = {val: item} as Node<T>;

        this.length++;
        if (!this.top) {
            this.top = node;
            return;
        }

        node.prev = this.top;
        this.top = node;
    }

    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);
        if (this.length === 0) {
            const top = this.top;
            this.top = undefined;
            return top?.val;
        }

        const top = this.top as Node<T>;
        this.top = top.prev;
        return top.val;
    }

    peek(): T | undefined {
        return this.top?.val;
    }
}
