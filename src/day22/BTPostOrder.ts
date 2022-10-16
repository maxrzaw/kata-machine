function walk(head: BinaryNode<number> | null, path: number[]): void {
    if (head === null) {
        return;
    }

    walk(head.left, path);
    walk(head.right, path);

    path.push(head.value);
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    const path: number[] = [];
    walk(head, path);
    return path;
}