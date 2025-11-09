export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    if (head.value === needle) {
        return true;
    }

    return (
        (head.left && dfs(head.left, needle)) ||
        (head.right && dfs(head.right, needle)) ||
        false
    );
}
