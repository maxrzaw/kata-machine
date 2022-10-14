// BFS uses a queue
// need to return an array
// will do it iteratively since it is BFS and not DFS
import Queue from "../ds/Queue";
export default function bfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {
    const seen: boolean[] = Array(graph.length).fill(false);
    const prev: number[] = Array(graph.length).fill(-1);
    const next: Queue<number> = new Queue<number>();

    // Setup
    next.enqueue(source);
    seen[source] = true;

    // Walk
    while (next.length > 0) {
        const curr = next.deque() as number; // This will always exist

        if (curr === needle) {
            break;
        }
        for (let i = 0; i < graph[curr].length; ++i) {
            const child: number = graph[curr][i].to;

            if (seen[child]) {
                continue;
            }

            seen[child] = true;
            prev[child] = curr;
            next.enqueue(child);
        }
    }


    // Finish
    if (!seen[needle]) {
        return null;
    }

    let curr = needle;
    let path: number[] = [];
    path.push(needle);
    while (prev[curr] != -1) {
        curr = prev[curr];
        path.push(curr);
    }

    return path.reverse();
}