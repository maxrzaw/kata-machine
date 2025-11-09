export default class ArrayList<T> {
    public length: number;
    private array: Array<T>;
    private capacity: number;

    constructor(capacity: number = 5) {
        this.capacity = capacity;
        this.array = [];
        this.array.length = this.capacity;
        this.length = 0;
    }

    private grow() {
        const prev = this.array;
        this.capacity = this.capacity * 2;
        this.array = [];
        this.array.length = this.capacity;
        prev.forEach((value) => {
            this.array.push(value);
        });
    }

    private find(item: T): number {
        for (let i = 0; i < this.length; i++) {
            if (this.array[i] === item) {
                return i;
            }
        }
        return -1;
    }

    prepend(item: T): void {
        this.insertAt(item, 0);
    }

    insertAt(item: T, idx: number): void {
        if (this.length === this.capacity) {
            this.grow();
        }
        for (let i = this.length; i > idx; i--) {
            this.array[i] = this.array[i - 1];
        }

        this.array[idx] = item;

        this.length = this.length + 1;
    }

    append(item: T): void {
        if (this.length == this.capacity) {
            this.grow();
        }
        this.array[this.length] = item;
        this.length = this.length + 1;
    }

    remove(item: T): T | undefined {
        const idx = this.find(item);
        if (idx === -1) {
            return undefined;
        }
        const result = this.get(idx);
        this.removeAt(idx);

        return result;
    }

    get(idx: number): T | undefined {
        if (idx >= this.length) {
            return undefined;
        }
        return this.array[idx];
    }

    removeAt(idx: number): T | undefined {
        if (idx >= this.length) {
            return undefined;
        }

        const result = this.array[idx];

        this.length = this.length - 1;

        while (idx < this.length) {
            this.array[idx] = this.array[idx + 1];
            idx = idx + 1;
        }

        return result;
    }
}
