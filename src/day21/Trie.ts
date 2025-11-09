// I want to use the approach of building the string as I traverse down
// We can also use a HashMap rather than an array

type TrieNode = {
    children: Map<string, TrieNode>;
    isWord: boolean;
};

function createTrieNode(): TrieNode {
    return {
        children: new Map<string, TrieNode>(),
        isWord: false,
    };
}

export default class Trie {
    private root: TrieNode;

    private getCompletions(
        prefix: string,
        root: TrieNode,
        result: string[],
    ): void {
        if (root.isWord) {
            result.push(prefix);
        }

        root.children.forEach((value: TrieNode, key: string) => {
            this.getCompletions(prefix + key, value, result);
        });
    }

    constructor() {
        this.root = createTrieNode();
    }

    insert(item: string): void {
        let curr = this.root;

        for (let i = 0; i < item.length; ++i) {
            let next = curr.children.get(item[i]);
            if (next === undefined) {
                next = createTrieNode();
                curr.children.set(item[i], next);
            }
            curr = next;
        }

        curr.isWord = true;
    }

    delete(item: string): void {
        let curr = this.root;

        for (let i = 0; i < item.length; ++i) {
            let next = curr.children.get(item[i]);
            if (next === undefined) {
                return;
            }
            curr = next;
        }

        curr.isWord = false;
    }

    find(partial: string): string[] {
        let curr = this.root;

        for (let i = 0; i < partial.length; ++i) {
            let next = curr.children.get(partial[i]);
            if (next === undefined) {
                return [];
            }
            curr = next;
        }

        const result: string[] = [];
        this.getCompletions(partial, curr, result);
        return result;
    }
}
