export default class Stack<T> {
    public length: number;
    private root: Node<T> | undefined;

    constructor() {
        this.length = 0;
        this.root = undefined;
    }

    push(item: T): void {
        const node: Node<T> = {
            val: item,
            prev: this.root,
        };
        this.root = node;
        this.length++;
    }

    pop(): T | undefined {
        if (this.root === undefined) {
            return undefined;
        }

        const result = this.root.val;
        this.root = this.root.prev;
        this.length--;

        return result;
    }

    peek(): T | undefined {
        return this.root?.val;
    }
}

type Node<T> = {
    val: T;
    prev?: Node<T>;
};
