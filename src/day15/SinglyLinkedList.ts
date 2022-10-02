type ListNode<T> = {
    value: T,
    next?: ListNode<T>,
}

export default class SinglyLinkedList<T> {
    public length: number;
    private head?: ListNode<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    prepend(item: T): void {
        if (this.head === undefined) {
            this.head = {value: item, next: undefined};
        } else {
            const node: ListNode<T> = {value: item, next: this.head};
            this.head = node;
        }
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length || idx < 0) {
            return;
        } else if (idx === 0) {
            this.prepend(item);
            return;
        } else if (idx === this.length) {
            this.append(item);
            return;
        }

        let curr = this.head;
        for (let i = 0; i < idx - 1; ++i) {
            if (curr === undefined) {
                break;
            }
            curr = curr.next;
        }
        if (curr === undefined) {
            return;
        }

        const node = {value: item, next: curr.next};
        curr.next = node;
        this.length++;
    }

    append(item: T): void {
        this.length++;
        const node = {value: item, next: undefined};

        if (this.head === undefined) {
            this.head = node;
            return;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = node;
    }

    remove(item: T): T | undefined {
        let out: T | undefined;
        if (this.head === undefined) {
            return undefined;
        }

        let curr = this.head;

        while (curr && curr.next) {
            if (curr.value === item) {
                break;
            }

            if (curr.next.value === item) {
                break;
            }
            curr = curr.next;
        }

        if (curr === undefined) {
            return undefined;
        } else if (curr.next === undefined) {
            if (curr.value !== item) {
                return undefined;
            }
            this.head = curr.next;
            this.length--;
            return item;
        }

        if (curr === this.head) {
            if (curr.value === item) {
                out = curr.value;
                this.head = curr.next;
            } else {
                out = curr.next.value;
                curr.next = curr.next.next;
            }
            this.length--;
        } else if (curr.next.value === item) {
            out = curr.next.value;
            curr.next = curr.next.next;
            this.length--;
        }
        return out;
    }

    get(idx: number): T | undefined {
        let curr = this.head;
        for (let i = 0; i < idx; ++i) {
            if (curr === undefined) {
                break;
            }
            curr = curr.next;
        }
        if (curr === undefined) {
            return undefined;
        }
        return curr.value;
    }

    removeAt(idx: number): T | undefined {
        if (idx > this.length || idx < 0) {
            return undefined;
        }

        let item: T;
        this.length--;

        if (idx === 0 && this.head) {
            item = this.head.value;
            this.head = this.head.next;
            return item;
        }

        let curr = this.head;
        for (let i = 0; i < idx - 1; ++i) {
            if (curr === undefined) {
                break;
            }
            curr = curr.next;
        }

        if (curr === undefined || curr.next === undefined) {
            return undefined;
        }

        if (curr === this.head) {
            this.head.next = curr.next;
        }

        item = curr.next.value;
        curr.next = curr.next.next;
        return item;
    }
}
