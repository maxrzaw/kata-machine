const p1 = 821;
const p2 = 823;

export default class Map<T extends string | number, V> {
    private length: number;
    private data: (undefined | [T, V])[];

    constructor() {
        this.data = new Array(5000);
        this.length = 0;
    }

    get(key: T): V | undefined {
        let idx: number = this.hash(key);
        while (this.data[idx] !== undefined && this.data[idx]?.[0] !== key) {
            idx = (idx + 1) % this.data.length;
        }

        if (this.data[idx] === undefined) {
            return undefined;
        }

        return this.data[idx]?.[1];
    }

    set(key: T, value: V): void {
        this.resize();
        let idx: number = this.hash(key);
        while (this.data[idx] !== undefined) {
            idx = (idx + 1) % this.data.length;
        }
        this.data[idx] = [key, value];
        this.length++;
    }

    delete(key: T): V | undefined {
        let idx: number = this.hash(key);
        while (this.data[idx] !== undefined && this.data[idx]?.[0] !== key) {
            idx = (idx + 1) % this.data.length;
        }

        if (this.data[idx] !== undefined) {
            const value = this.data[idx]?.[1];
            this.data[idx] = undefined;
            this.length--;
            return value;
        }

        return undefined;
    }

    size(): number {
        return this.length;
    }

    private resize(): void {
        if (this.length * 3 < this.data.length) {
            return;
        }

        const data = this.data;
        this.data = new Array(this.data.length * 2);
        this.length = 0;

        for (let i = 0; i < data.length; ++i) {
            const key = data[i];

            if (key) {
                this.set(...key);
            }
        }
    }

    private hash(key: T): number {
        if (typeof key === "number") {
            return (key * p1 * p2) % this.data.length;
        } else {
            return (
                (p1 * key.charCodeAt(0) + p2 * key.charCodeAt(key.length - 1)) %
                this.data.length
            );
        }
    }
}
