function areUnvisited(seen: boolean[]): boolean {
    return seen.some(node => node === false);
}

function getShortestUnvisited(seen: boolean[], dists: number[]): number {
    let min_val = Infinity;
    let min_idx = -1;

    for (let i = 0; i < seen.length; ++i) {
        if (!seen[i] && dists[i] < min_val) {
            min_val = dists[i];
            min_idx = i;
        }
    }
    return min_idx;
}

export default function dijkstra_list(source: number, sink: number, arr: WeightedAdjacencyList): number[] {
    const seen: boolean[] = Array(arr.length).fill(false);
    const prev: number[] = Array(arr.length).fill(-1);
    const dists: number[] = Array(arr.length).fill(Infinity);

    dists[source] = 0;

    while (areUnvisited(seen)) {
        const current: number = getShortestUnvisited(seen, dists);
        seen[current] = true;
        if (current === sink) {
            break;
        }

        for (let i = 0; i < arr[current].length; ++i) {
            const edge = arr[current][i];
            const total_dist = dists[current] + edge.weight;
            if (!seen[edge.to] && total_dist < dists[edge.to]) {
                dists[edge.to] = total_dist;
                prev[edge.to] = current;
            }
        }
    }

    if (prev[sink] === -1) {
        return [];
    }

    const path: number[] = [];
    let i = sink;
    while (prev[i] !== -1) {
        path.push(i);
        i = prev[i];
    }
    path.push(source);
    path.reverse();

    return path;
}
