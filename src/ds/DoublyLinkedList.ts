// Node struct
type Node<T> = {
    val: T,
    prev?: Node<T>,
    next?: Node<T>,
};

export default class DoublyLinkedList<T> {
    public length: number;
    private front?: Node<T>;
    private back?: Node<T>;

    constructor() {
        this.front = undefined;
        this.back = undefined;
        this.length = 0;
    }

    // helper function to search for item T
    private getItemNode(item: T): Node<T> | undefined {
        let n = this.front;
        while(n) {
            if (n.val == item) {
                break;
            }
            n = n.next;
        }

        return n;
    }

    // helper function to traverse to idx from the start or end
    private getIdxNode(idx: number): Node<T> | undefined {
        if (idx >= this.length) {
            return undefined;
        }

        let n = this.front;
        for (let i = 0; i < idx && n; ++i) {
            n = n.next;
        }

        return n;
    }

    // helper to insert
    private insertAfterNode(item: T, n?: Node<T>): void {
        // create new node elt
        let elt = {val: item} as Node<T>;

        if (this.length === 0) {
            this.front = this.back = elt;
            this.length ++;
            return;
        }

        if (!n) {
            // insert at the front
            elt.next = this.front;
            if (this.front) {
                this.front.prev = elt;
            }
            this.front = elt;
            this.length++;
            return;
        }

        // set elt->next = n
        elt.next = n.next;

        // set n->next->prev to elt
        if (n.next) {
            n.next.prev = elt;
        }

        // set n->next = elt
        n.next = elt;

        // set elt->prev = next
        elt.prev = n;

        // update back
        if (n === this.back) {
            this.back = elt;
        }

        this.length++;
        return;
    }

    // helper to remove a node
    private removeNode(n?: Node<T>): T | undefined {
        if (!n) {
            return undefined;
        }

        // n->prev->next = n->next
        if (n === this.front) {
            this.front = n.next;
        } else if (n.prev) {
            n.prev.next = n.next;
        }

        // n->next->prev = n->prev
        if (n === this.back) {
            this.back = n.prev;
        } else if (n.next) {
            n.next.prev = n.prev;
        }

        let val = n.val;

        // delete curr
        n = undefined

        this.length--;
        return val;
    }

    printList(): void {
        let n = this.front;
        let list: string = `length: ${this.length} `;
        while (n) {
            list += n.val;
            list += " -> ";
            n = n.next;
        }
        console.log(list);
    }

    insertAt(item: T, idx: number): void {
        let n = this.getIdxNode(idx - 1);
        this.insertAfterNode(item, n);
    }

    prepend(item: T): void {
        this.insertAfterNode(item, undefined);
    }

    append(item: T): void {
        this.insertAfterNode(item, this.back);
    }

    remove(item: T): T | undefined {
        // linear search to find item
        let n = this.getItemNode(item);
        return this.removeNode(n);
    }

    get(idx: number): T | undefined {
        // start at front and traverse idx times
        let n = this.getIdxNode(idx);
        return n ? n.val : undefined;
    }

    removeAt(idx: number): T | undefined {
        let n = this.getIdxNode(idx);
        return this.removeNode(n);
    }
}
