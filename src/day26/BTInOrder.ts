function walk(head: BinaryNode<number> | null, path: number[]): void {
    if (head === null) {
        return;
    }

    walk(head.left, path);
    path.push(head.value);
    walk(head.right, path);
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    const path: number[] = [];
    walk(head, path);
    return path;
}