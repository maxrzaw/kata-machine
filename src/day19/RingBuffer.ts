export default class RingBuffer<T> {
    public length: number;
    private data: T[];
    private head: number;

    constructor(capacity: number = 5) {
        this.data = Array(capacity);
        this.head = 0;
        this.length = 0;
    }

    push(item: T): void {
        this.grow();

        this.data[this.getRingIdx(this.length)] = item;
        this.length++;
    }

    get(idx: number): T | undefined {
        if (idx >= this.length || idx < 0) {
            return undefined;
        }

        return this.data[this.getRingIdx(idx)];
    }

    pop(): T | undefined {
        if (this.length === 0) {
            return undefined;
        }

        const idx = this.head;
        this.head = (this.head + 1) % this.data.length;
        this.length--;

        return this.data[idx];
    }

    private getRingIdx(idx: number): number {
        return (this.head + idx) % this.data.length;
    }

    private grow() {
        if (this.length + 1 < this.data.length) {
            return;
        }

        const prev_data = this.data;
        this.data = Array(prev_data.length * 2);

        for (let i = 0; i < this.length; i++) {
            this.data[i] = prev_data[this.getRingIdx(i)];
        }

        this.head = 0;
    }
}
