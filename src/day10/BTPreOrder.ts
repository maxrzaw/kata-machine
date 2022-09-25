function pre_order_recurse(head: BinaryNode<number>, path: number[]) {
    path.push(head.value);

    if (head.left) {
        pre_order_recurse(head.left, path);
    }

    if (head.right) {
        pre_order_recurse(head.right, path);
    }
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    const path: number[] = [];
    pre_order_recurse(head, path);
    return path;
}
