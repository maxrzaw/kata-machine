type Node<T> = {
    value: T,
    next?: Node<T>,
};

export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
    }

    // Returns the previous node or undefined if no such node exists.
    private getPrev(item: T): Node<T> | undefined {
        let current = this.head;
        while (current && current.next && current.next.value !== item) {
            current = current.next;
        }
        if (current?.next?.value === item) {
            return current;
        }
        return undefined;
    }

    // Returns the ith node or undefined if no such node exists.
    private getIthNode(idx: number): Node<T> | undefined {
        let current = this.head;
        let i = 0;
        for (; current && i < idx; ++i) {
            current = current.next;
        }

        if (current && i === idx) {
            return current;
        }
        return undefined;
    }

    private removeNextNode(prev: Node<T> | undefined): T | undefined{
        this.length--;
        if (prev === undefined) {
            // we are removing the head
            const node = this.head;
            this.head = node?.next;
            return node?.value;
        } else {
            const node = prev.next;
            prev.next = node?.next;
            return node?.value;
        }
        // Free memory here.
    }

    prepend(item: T): void {
        this.insertAt(item, 0);
    }

    insertAt(item: T, idx: number): void {
        if (idx === 0) {
            const node = {value: item, next: this.head} as Node<T>;
            this.head = node;
            this.length++;
            return;
        }

        const prev = this.getIthNode(idx - 1);

        if (prev === undefined) {
            throw new Error("bad boy!");
        }

        const node = {value: item, next: prev?.next} as Node<T>;
        prev.next = node;
        this.length++;
    }

    append(item: T): void {
        this.insertAt(item, this.length);
    }

    remove(item: T): T | undefined {
        const prev = this.getPrev(item);

        if (prev === undefined && this.head?.value !== item) {
            return undefined;
        }

        return this.removeNextNode(prev);
    }

    get(idx: number): T | undefined {
        return this.getIthNode(idx)?.value;
    }

    removeAt(idx: number): T | undefined {
        const prev = this.getIthNode(idx - 1);

        if (prev === undefined && idx !== 0) {
            return undefined;
        }

        return this.removeNextNode(prev);
    }
}
