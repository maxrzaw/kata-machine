export default class Trie {
    private root: TrieNode = { children: new Map(), leaf: false };
    constructor() {}

    insert(item: string): void {
        if (item === "") return;
        this.insertHelper(this.root, item);
    }

    private insertHelper(node: TrieNode, item: string): void {
        if (item === "") {
            node.leaf = true;
            return;
        }
        const firstChar = item[0];
        if (!node.children.has(firstChar)) {
            node.children.set(firstChar, { children: new Map(), leaf: false });
        }
        const childNode = node.children.get(firstChar)!;
        this.insertHelper(childNode, item.slice(1));
    }

    delete(item: string): void {
        if (item === "") return;
        this.deleteHelper(this.root, item);
    }

    private deleteHelper(node: TrieNode, item: string): boolean {
        if (item === "") {
            if (!node.leaf) return false;
            node.leaf = false;
            return node.children.size === 0;
        }

        const firstChar = item[0];
        const childNode = node.children.get(firstChar);

        if (!childNode) return false;

        const shouldDeleteChild = this.deleteHelper(childNode, item.slice(1));
        if (shouldDeleteChild) {
            node.children.delete(firstChar);
            return node.children.size === 0 && !node.leaf;
        }

        return false;
    }

    find(partial: string): string[] {
        let node: TrieNode | undefined = this.root;
        for (let i = 0; i < partial.length; i++) {
            const value = partial.at(i);
            if (value === undefined || node === undefined) {
                return [];
            }
            node = node?.children.get(value);
        }
        // node will be at the end of partial now.
        if (node === undefined) {
            return [];
        }
        return this.getCompletions(node, partial);
    }

    private getCompletions(node: TrieNode, prefix: string): string[] {
        const results = [];
        if (node.leaf) {
            results.push(prefix);
        }
        node.children.forEach((value, key) => {
            const values = this.getCompletions(value, prefix + key);
            values.forEach((x) => results.push(x));
        });
        return results;
    }
}

interface TrieNode {
    children: Map<string, TrieNode>;
    leaf: boolean;
}
