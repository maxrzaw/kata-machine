import DoublyLinkedList from "../ds/DoublyLinkedList";

export default class Stack<T> {
    public length: number;
    private data: DoublyLinkedList<T>;

    constructor() {
        this.data = new DoublyLinkedList<T>();
        this.length = 0;
    }

    push(item: T): void {
        this.data.prepend(item);
        this.length++;
    }

    pop(): T | undefined {
        if (this.length === 0) {
            return undefined;
        }
        this.length--;
        return this.data.removeAt(0);
    }

    peek(): T | undefined {
        return this.data.get(0);
    }
}
