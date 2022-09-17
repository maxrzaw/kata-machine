import Queue from "../day1/Queue";

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    let queue: Queue<BinaryNode<number>> = new Queue<BinaryNode<number>>();
    queue.enqueue(head);

    while (queue.length > 0) {
        const elt = queue.deque();

        if (elt === undefined) {
            continue;
        }

        if (elt.value === needle) {
            return true;
        }

        if (elt.left) {
            queue.enqueue(elt.left);
        }

        if (elt.right) {
            queue.enqueue(elt.right);
        }
    }

    return false;
}
