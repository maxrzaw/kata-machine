export default class ArrayList<T> {
    public length: number;
    private data: T[];

    private grow(): void {
        if (this.length === this.data.length) {
            const prev = this.data;
            this.data = new Array(this.length * 2);
            for (let i = 0; i < prev.length; ++i) {
                this.data[i] = prev[i];
            }
        }
    }

    constructor(capacity: number = 5) {
        this.data = new Array(capacity);
        this.length = 0;
    }

    prepend(item: T): void {
        this.insertAt(item, 0);
    }

    insertAt(item: T, idx: number): void {
        this.grow();

        for (let i = this.length - 1; i >= idx; --i) {
            this.data[i + 1] = this.data[i];
        }

        this.length++;
        this.data[idx] = item;
    }

    append(item: T): void {
        this.grow();
        this.data[this.length] = item;
        this.length++;
    }

    remove(item: T): T | undefined {
        let i = -1;
        for (; i < this.length; ++i) {
            if (this.data[i] === item) {
                break;
            }
        }

        if (i === -1) {
            return undefined;
        }

        return this.removeAt(i);
    }

    get(idx: number): T | undefined {
        if (idx >= this.length) {
            return undefined;
        }

        return this.data[idx];
    }

    removeAt(idx: number): T | undefined {
        if (idx >= this.length) {
            return undefined;
        }

        let out = this.data[idx];

        this.length--;

        for (let i = idx; i < this.length; ++i) {
            this.data[i] = this.data[i + 1];
        }

        return out;
    }
}
