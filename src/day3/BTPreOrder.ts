function pre_order(head: BinaryNode<number>, order: number[]): void {
    order.push(head.value);

    if (head.left) {
        pre_order(head.left, order);
    }

    if (head.right) {
        pre_order(head.right, order);
    }
}
export default function pre_order_traversal(head: BinaryNode<number>): number[] {
    let order: number[] = [];
    pre_order(head, order);
    return order;
}
