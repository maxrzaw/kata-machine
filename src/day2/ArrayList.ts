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
        const old = this.array;
        this.capacity *= 2;
        this.array = [];
        this.array.length = this.capacity;

        let i = 0;
        for (; i < this.length; ++i) {
            this.array[i] = old[i];
        }
    }

    // ShiftRight manages the size of the array and shifts everything
    // from array[idx] one to the right. Creating free space at array[idx].
    private shiftRight(idx: number) {
        if (this.length == this.capacity) {
            this.grow();
        }

        let i = this.length;
        for (; i > idx; --i) {
            this.array[i] = this.array[i - 1];
        }
        this.length++;
    }

    // ShiftLeft manages the size of the array and shifts everything to the
    // right of array[idx] one to the left. Overwriting array[idx].
    private ShiftLeft(idx: number) {
        this.length--;
        let i = idx;
        for (; i < this.length; ++i) {
            this.array[i] = this.array[i + 1];
        }
    }

    get(idx: number): T | undefined {
        return idx >= this.length ? undefined : this.array[idx];
    }

    prepend(item: T): void {
        this.shiftRight(0);
        this.array[0] = item;
    }

    insertAt(item: T, idx: number): void {
        this.shiftRight(idx);
        this.array[idx] = item;
    }

    append(item: T): void {
        if (this.length == this.capacity) {
            this.grow();
        }

        this.array[this.length] = item;
        this.length++;
    }

    removeAt(idx: number): T | undefined {
        const item = this.get(idx);
        this.ShiftLeft(idx);
        return item;
    }

    remove(item: T): T | undefined {
        let i = 0;
        for (; i < this.length; ++i) {
            if (this.array[i] == item) {
                break;
            }
        }

        // item was not found
        if (i == this.length) {
            return undefined;
        }

        return this.removeAt(i);
    }
}
