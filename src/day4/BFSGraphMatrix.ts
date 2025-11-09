import Queue from "../ds/Queue";

export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    let queue: Queue<number> = new Queue<number>();
    let seen: boolean[] = [];
    seen.length = graph.length;
    seen.fill(false);
    let prev: number[] = [];
    prev.length = graph.length;
    prev.fill(-1);

    seen[source] = true;
    queue.enqueue(source);

    while (queue.length !== 0) {
        const n = queue.deque() as number;

        if (n === needle) {
            break;
        }

        for (let i = 0; i < graph[n].length; ++i) {
            if (seen[i] || graph[n][i] === 0) {
                continue;
            }

            if (i == needle) {
                prev[i] = n;
                break;
            }

            seen[i] = true;
            prev[i] = n;
            queue.enqueue(i);
        }
    }

    if (prev[needle] === -1) {
        return null;
    }

    // Start at needle and build the path
    let path: number[] = [];

    let i = needle;
    while (i !== -1) {
        path.push(i);
        let previous = prev[i];
        i = previous;
    }
    return path.reverse();
}
