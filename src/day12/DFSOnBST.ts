function dfs_recurse(head: BinaryNode<number> | null, needle: number): boolean {
    if (head === null) {
        return false;
    }

    if (head.value === needle) {
        return true;
    }

    return dfs_recurse(head.left, needle) || dfs_recurse(head.right, needle);
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return dfs_recurse(head, needle);
}
