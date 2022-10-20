import DoublyLinkedList from "../ds/DoublyLinkedList";

export default class Queue<T> {
    public length: number;
    private data: DoublyLinkedList<T>;
    
    constructor() {
        this.data = new DoublyLinkedList<T>();
        this.length = 0;
    }

    enqueue(item: T): void {
        this.data.append(item);
        this.length++;
    }

    deque(): T | undefined {
        if (this.length === 0) {
            return undefined;
        }

        this.length--;
        const out = this.data.removeAt(0);
        return out;
    }

    peek(): T | undefined {
        return this.data.get(0);
    }
}