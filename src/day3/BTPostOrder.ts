function post_order(head: BinaryNode<number>, order: number[]): void {
    if (head.left) {
        post_order(head.left, order);
    }

    if (head.right) {
        post_order(head.right, order);
    }

    order.push(head.value);
}
export default function post_order_traversal(head: BinaryNode<number>): number[] {
    let order: number[] = [];
    post_order(head, order);
    return order;
}
