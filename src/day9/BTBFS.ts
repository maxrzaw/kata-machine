import Queue from "../day1/Queue";

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const queue: Queue<BinaryNode<number>> = new Queue<BinaryNode<number>>();
    queue.enqueue(head);

    while (queue.length !== 0) {
        const node = queue.deque();

        if (!node) {
            continue;
        }

        if (node.value === needle) {
            return true;
        }

        if (node.left) {
            queue.enqueue(node.left);
        }

        if (node.right) {
            queue.enqueue(node.right);
        }
    }
    return false;
}
