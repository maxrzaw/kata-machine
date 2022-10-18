export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    if (head.value === needle) {
        return true;
    }

    let left: boolean = head.left === null ? false : dfs(head.left, needle);
    let right: boolean = head.right === null ? false : dfs(head.right, needle);

    return left || right;
}