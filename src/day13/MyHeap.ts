export default class MyHeap<T> {
    public length: number;
    private data: T[];
    private compare: (a: T, b: T) => boolean;
    constructor(compare: (a: T, b: T) => boolean) {
        this.length = 0;
        this.data = [];
        this.compare = compare;
    }

    private left(idx: number): number {
        return 2 * idx + 1;
    }

    private right(idx: number): number {
        return 2 * idx + 2;
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) {
            return;
        }

        const parent = this.parent(idx);
        const value = this.data[idx];
        const parentValue = this.data[parent];

        if (this.compare(value, parentValue)) {
            this.data[parent] = value;
            this.data[idx] = parentValue;
            this.heapifyUp(parent);
        }
    }

    private heapifyDown(idx: number): void {
        if (idx >= this.length) {
            return;
        }

        const left = this.left(idx);
        const right = this.right(idx);

        if (left >= this.length) {
            return;
        }

        const leftValue = this.data[left];
        const rightValue = this.data[right];
        const value = this.data[idx];

        if (this.compare(rightValue, leftValue) && this.compare(rightValue, value)) {
            this.data[idx] = rightValue;
            this.data[right] = value;
            this.heapifyDown(right);
        } else if (this.compare(leftValue, rightValue) && this.compare(leftValue, value)) {
            this.data[idx] = leftValue;
            this.data[left] = value;
            this.heapifyDown(left);
        }
    }

    insert(value: T): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): T | undefined {
        if (this.length === 0) {
            return undefined;
        }

        const value = this.data[0];

        if (this.length === 1) {
            this.length--;
            return value;
        }

        this.length--;
        this.data[0] = this.data[this.length];
        this.heapifyDown(0);

        return value;
    }
}
