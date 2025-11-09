// Depth first search preserves structure
export default function compare(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
    if (a === null && b === null) {
        return true;
    } else if (a === null || b === null) {
        return false;
    }

    return (
        a.value === b.value &&
        compare(a.left, b.left) &&
        compare(a.right, b.right)
    );
}
