export default class RingBuffer<T> {
    public length: number;
    private data: Array<T>;
    private tail: number;

    
    constructor(private capacity: number = 10) {
        this.data = new Array<T>();
        this.data.length = capacity;
        this.length = 0;
        this.tail = 0;
    }

    push(item: T): void {
        if (this.length === this.capacity) {
            this.grow();
        }
        this.data[this.head()] = item;
        this.length++;
    }

    get(idx: number): T | undefined {
        if (idx >= this.length) {
            return undefined;
        }

        return this.data[(this.tail + idx) % this.capacity];
    }

    pop(): T | undefined {
        if (this.length === 0) {
            return undefined;
        }

        this.length--;
        const val = this.data[this.tail];
        this.tail = (this.tail + 1) % this.capacity;
        
        return val;
    }

    // returns the index in data where the next push will go
    private head(): number {
        return (this.tail + this.length) % this.capacity;
    }

    private grow(): void {
        this.data.length = 2 * this.capacity;
        // take elements between [0, tail) and add them starting at prev capacity
        for (let i = 0; i < this.tail; ++i) {
            this.data[this.capacity + i] = this.data[i];
        }
        this.capacity *= 2;
    }
}
