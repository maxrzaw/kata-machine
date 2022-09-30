type TrieNode = {
    children: TrieNode[],
    isValue: boolean,
    value?: string,
}

function createNode(): TrieNode {
    return {children: [], isValue: false, value: undefined};
}

function getIdx(char: string): number {
    return char.charCodeAt(0) - 'a'.charCodeAt(0);
}

export default class Trie {
    private root: TrieNode;
    constructor() {
        this.root = createNode();
        this.root.isValue = true;
        this.root.value = "";
    }

    insert(item: string): void {
        let current = this.root;
        for (let i = 0; i < item.length; ++i) {
            const idx = getIdx(item[i]);
            if (current.children[idx] === undefined) {
                current.children[idx] = createNode();
            }
            current = current.children[idx] as TrieNode;
        }
        current.isValue = true;
        current.value = item;
    }

    delete(item: string): void {
        let current = this.root;
        for (let i = 0; i < item.length; ++i) {
            const idx = getIdx(item[i]);
            if (current.children[idx] === undefined) {
                return;
            }
            current = current.children[idx] as TrieNode;
        }
        current.isValue = false;
    }

    find(partial: string): string[] {
        let current = this.root;
        for (let i = 0; i < partial.length; ++i) {
            const idx = getIdx(partial[i]);
            if (current.children[idx] === undefined) {
                return [];
            }
            current = current.children[idx] as TrieNode;
            console.log(current);
        }
        const words: string[] = [];
        this.findRecursively(current, words);
        return words;
    }

    private findRecursively(root: TrieNode, words: string[]): void {
        if (root.isValue && root.value) {
            words.push(root.value);
        }
        for (let node of root.children) {
            if (node === undefined) {
                continue;
            }

            this.findRecursively(node, words);
        }
    }
}
