const directions: number[][] = [
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 0],
];

function solve_recursive(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
    path: Point[],
    seen: boolean[][],
): boolean {
    // Base Case: Off Map
    if (
        start.x < 0 ||
        start.x >= maze[0].length ||
        start.y < 0 ||
        start.y >= maze.length
    ) {
        return false;
    }

    // Base Case: Wall
    if (maze[start.y][start.x] == wall) {
        return false;
    }

    // Base Case: Seen already
    if (seen[start.y][start.x]) {
        return false;
    }

    // Base Case: End
    if (start.x === end.x && start.y === end.y) {
        path.push(start);
        return true;
    }

    // pre
    path.push(start);
    seen[start.y][start.x] = true;

    // recursive
    for (let i = 0; i < directions.length; ++i) {
        const [x, y] = directions[i];

        if (
            solve_recursive(
                maze,
                wall,
                { x: start.x + x, y: start.y + y },
                end,
                path,
                seen,
            )
        ) {
            return true;
        }
    }

    // post
    path.pop();
    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const path: Point[] = [];
    const seen: boolean[][] = [];
    for (let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze.length).fill(false));
    }

    solve_recursive(maze, wall, start, end, path, seen);
    return path;
}
