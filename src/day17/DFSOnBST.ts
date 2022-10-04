function walk(head: BinaryNode<number> | null, needle: number): boolean {
    if (head === null) {
        return false;
    }

    if (head.value === needle) {
        return true;
    }


    return walk(head.left, needle) || walk(head.right, needle);
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return walk(head, needle);
}
