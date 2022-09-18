const p1 = 821;
const p2 = 823;

export default class Map<K extends (string | number), V> {
    private data: (undefined | [K, V])[];
    private length: number;

    constructor() {
        this.data = new Array(5000);
        this.length = 0;
    }

    get(key: K): V | undefined {
        let idx = this.hash(key);
        let item: [K, V] | undefined = undefined;
        // increment i and idx by i to reduce collisions
        for (let i = 0; i < this.data.length; ++i, idx += i) {
            item = this.data[idx % this.data.length];
            if (!item || item?.[0] === key) {
                break;
            }
        }

        return item?.[1];
    }

    set(key: K, value: V): void {
        this.resize();

        let idx = this.hash(key);
        let item: [K, V] | undefined = undefined;
        // increment i and idx by i to reduce collisions
        for (let i = 0; i < this.data.length; ++i, idx += i) {
            item = this.data[idx % this.data.length];
            if (!item) {
                this.data[idx % this.data.length] = [key, value];
                this.length++;
                break;
            }
        }
    }

    delete(key: K): V | undefined {
        let idx = this.hash(key);
        let item: [K, V] | undefined = undefined;
        // increment i and idx by i to reduce collisions
        for (let i = 0; i < this.data.length; ++i, idx += i) {
            item = this.data[idx % this.data.length];
            if (!item || item?.[0] === key) {
                if (item && item[0] === key) {
                    this.data[idx % this.data.length] = undefined;
                    this.length--;
                }
                break;
            }
        }

        return item?.[1];
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
            // is this right? I thought we had to get the key?
            const key = data[i]; 

            if (key) {
                this.set(...key);
            }
        }
    }

    private hash(key: K): number {
        if (typeof key === "number") {
            return (key * p1 * p2) % this.data.length;
        }
        return (key.charCodeAt(0) * p1 + key.charCodeAt(key.length - 1) * p1) % this.data.length;
    }
}
