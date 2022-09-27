import Queue from "../day1/Queue";

export default function bfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {
    const seen: boolean[] = Array(graph.length).fill(false);
    const prev: number[] = Array(graph.length).fill(-1);
    const nodes: Queue<number> = new Queue<number>();
    
    seen[source] = true;
    nodes.enqueue(source);

    while (nodes.length > 0) {
        const current = nodes.deque() as number;
        
        if (current === needle) {
            break;
        }

        // add each of the nodes adjacent to current to the list if they have
        // not been seen yet. We do not need to worry about null checks since
        // the entries exist.
        for (let i = 0; i < graph[current].length; ++i) {
            const next: number = graph[current][i].to;

            if (!seen[next]) {
                seen[next] = true;
                prev[next] = current;
                nodes.enqueue(next);
            }

            if (next === needle) {
                break;
            }
        }
    }

    // check if we found needle or not
    if (prev[needle] === -1) {
        return null;
    }

    // we need to build the path now.
    const path: number[] = [];
    let i = needle;
    while (prev[i] !== -1) {
        path.push(i);
        i = prev[i];
    }

    path.push(source);
    path.reverse();
    return path;
}
