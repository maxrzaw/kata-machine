function walk(head: BinaryNode<number> | null, path: number[]): void {
    if (head === null) {
        return;
    }

    path.push(head.value);
    walk(head.left, path);
    walk(head.right, path);
}
export default function pre_order_search(head: BinaryNode<number>): number[] {
    const path: number[] = [];
    walk(head, path);
    return path;
}