type TrieNode = {
    children: TrieNode[],
    isValue: boolean
    value?: string
}

// Creates a new TrieNode with defaults
function createTrieNode() {
    return {
        children: [],
        isValue: false,
    };
}

// Char code for 'a'.
const start = 'a'.charCodeAt(0);

// Returns the distance from 'a' which can be used to index into an array.
function getIdx(item: string, idx: number): number {
    return item.toLowerCase().charCodeAt(idx) - start;
}

export default class Trie {
    private head: TrieNode;

    constructor() {
        this.head = createTrieNode();
    }

    insert(item: string): void {
        let current: TrieNode = this.head;
        for (let i = 0; i < item.length; ++i) {
            const letter = getIdx(item, i);
            if (!current.children[letter]) {
                current.children[letter] = createTrieNode();
            }
            current = current.children[letter];
        }

        current.isValue = true;
        current.value = item;
    }

    delete(item: string): void {
        let current: TrieNode = this.head;
        for (let i = 0; current && i < item.length; ++i) {
            current = current.children[getIdx(item, i)];
        }

        if (!current) {
            return;
        }

        current.value = undefined;
        current.isValue = false;
    }

    find(partial: string): string[] {
        let current = this.head;
        for (let i = 0; i < partial.length; ++i) {
            current = current.children[getIdx(partial, i)];
        }

        return this.findRecursively(current, []);
    }

    // Finds all the possible words to complete node.
    private findRecursively(node: TrieNode | undefined, out: string[]): string[] {
        if (!node) {
            return out;
        }

        if (node.isValue) {
            out.push(node.value as string);
        }

        for (let i = 0; i < node.children.length; ++i) {
            this.findRecursively(node.children[i], out);
        }
        
        return out;
    }
}
