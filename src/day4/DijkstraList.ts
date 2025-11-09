import Queue from "../ds/Queue";

function hasUnvisited(seen: boolean[], dists: number[]): boolean {
    return seen.some((s, i) => !s && dists[i] < Infinity);
}

function getLowestUnvisited(seen: boolean[], dists: number[]): number {
    let idx = -1;
    let lowestDistance = Infinity;

    for (let i = 0; i < seen.length; ++i) {
        if (seen[i]) {
            continue;
        }

        if (lowestDistance > dists[i]) {
            lowestDistance = dists[i];
            idx = i;
        }
    }

    return idx;
}

export default function dijkstra_list(
    source: number,
    sink: number,
    graph: WeightedAdjacencyList,
): number[] {
    let queue: Queue<number> = new Queue<number>();
    let prev = Array(graph.length).fill(-1);
    let seen = Array(graph.length).fill(false);
    let dists = Array(graph.length).fill(Infinity);
    dists[source] = 0;

    while (hasUnvisited(seen, dists)) {
        const current = getLowestUnvisited(seen, dists);
        seen[current] = true;

        const edges = graph[current];
        for (let i = 0; i < edges.length; ++i) {
            const edge = edges[i];
            if (seen[edge.to]) {
                continue;
            }

            const dist = dists[current] + edge.weight;
            if (dist < dists[edge.to]) {
                dists[edge.to] = dist;
                prev[edge.to] = current;
            }
        }
    }

    const out: number[] = [];
    let current = sink;

    while (prev[current] !== -1) {
        out.push(current);
        current = prev[current];
    }
    out.push(source);

    return out.reverse();
}
