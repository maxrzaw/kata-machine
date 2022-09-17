function in_order(head: BinaryNode<number>, order: number[]): void {
    if (head.left) {
        in_order(head.left, order);
    }

    order.push(head.value);

    if (head.right) {
        in_order(head.right, order);
    }
}

export default function in_order_traversal(head: BinaryNode<number>): number[] {
    let order: number[] = [];
    in_order(head, order);
    return order;
}
