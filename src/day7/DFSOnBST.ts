function dfs_resurse(head: BinaryNode<number>, needle: number): boolean {
    if (head.value === needle) {
        return true;
    }

    if (head.left && dfs_resurse(head.left, needle)) {
        return true;
    }

    if (head.right && dfs_resurse(head.right, needle)) {
        return true;
    }

    return false;
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return dfs_resurse(head, needle);
}
