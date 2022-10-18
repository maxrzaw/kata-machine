export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    if (head.value === needle) {
        return true;
    }

    if (head.value < needle) {
        return head.right === null ? false : dfs(head.right, needle);
    }
    return head.left === null ? false : dfs(head.left, needle);
}