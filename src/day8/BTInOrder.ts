function in_order_recursive(order: number[], head: BinaryNode<number> | null) {
    if (head === null) {
        return;
    }

    // left
    in_order_recursive(order, head.left);
    // current
    order.push(head.value);
    // right
    in_order_recursive(order, head.right);
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    const order: number[] = [];
    in_order_recursive(order, head);
    return order;
}
