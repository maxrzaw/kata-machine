import MyHeap from "../day13/MyHeap";
type EdgeWrapper = {
    edge: GraphEdge,
    from: number,
}

function hasUnvisited(seen: boolean[]): boolean {
    return seen.some(vertex => !vertex);
}

export default function prims(list: WeightedAdjacencyList): WeightedAdjacencyList | null {
    const seen: boolean[] = Array(list.length).fill(false);
    const reachable: MyHeap<EdgeWrapper> = new MyHeap<EdgeWrapper>((a: EdgeWrapper, b: EdgeWrapper) => a.edge.weight < b.edge.weight);
    const picked: WeightedAdjacencyList = []; //Array(list.length).fill(new Array<GraphEdge>());

    for (let i = 0; i < list.length; ++i) {
        picked.push(new Array<GraphEdge>());
    }

    // seed with vertex 0
    seen[0] = true;
    for (let i = 0; i < list[0].length; ++i) {
        reachable.insert({from: 0, edge: list[0][i]});
    }

    while(hasUnvisited(seen) && reachable.length > 0) {
        // pick the closest unseen vertex
        let vertex: number = -1;
        let edge: EdgeWrapper;
        do {
            edge = reachable.delete() as EdgeWrapper;
            vertex = edge.edge.to;
        }
        while (seen[vertex] && reachable.length > 0);

        if (seen[vertex]) {
            break;
        }

        picked[edge.from].push(edge.edge);
        picked[vertex].push({to: edge.from, weight: edge.edge.weight});

        // mark it as seen
        seen[vertex] = true;

        // add any unseen verticies
        for (let i = 0; i < list[vertex].length; ++i) {
            const edge = list[vertex][i];
            if (!seen[edge.to]) {
                reachable.insert({from: vertex, edge: list[vertex][i]});
            }
        }
    }

    return hasUnvisited(seen) ? null : picked;
}
