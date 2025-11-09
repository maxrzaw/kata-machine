function dfsRecursive(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
    path: number[],
    seen: boolean[],
): boolean {
    // Pre
    path.push(source);

    if (source === needle) {
        return true;
    }

    // Recursive
    for (let i = 0; i < graph[source].length; ++i) {
        let egde = graph[source][i];

        if (seen[egde.to]) {
            continue;
        }

        seen[egde.to] = true;
        if (dfsRecursive(graph, egde.to, needle, path, seen)) {
            return true;
        }
    }

    // Post
    path.pop();
    return false;
}

export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    let seen = Array(graph.length).fill(false);
    seen[source] = true;

    let path: number[] = [];

    if (!dfsRecursive(graph, source, needle, path, seen)) {
        return null;
    }

    return path;
}
