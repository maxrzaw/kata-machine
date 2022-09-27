import Queue from "../ds/Queue";

export default function bfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {
    const seen = Array(graph.length).fill(false);
    const prev = Array(graph.length).fill(-1);
    const next = new Queue<number>();

    seen[source] = true;
    next.enqueue(source);

    while (next.length !== 0) {
        const curr = next.deque() as number;

        if (curr === needle) {
            break;
        }

        for (let i = 0; i < graph[curr].length; ++i) {
            const edge = graph[curr][i];
            if (seen[edge.to]) {
                continue;
            }

            prev[edge.to] = curr;
            seen[edge.to] = true;

            if (edge.to === needle) {
                break;
            }

            next.enqueue(edge.to);
        }
    }

    if (prev[needle] === -1 && needle !== source) {
        return null;
    }

    const path: number[] = [];
    let i = needle;
    while (prev[i] !== -1) {
        path.push(i);
        i = prev[i];
    }
    path.push(source);

    return path.reverse();
}
