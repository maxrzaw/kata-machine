export default function compare(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
    // Compare a and b by value
    if (a?.value !== b?.value) {
        return false;
    }

    // they are the same at this point
    if (a === null || b === null) {
        return true;
    }

    // Compare a.left and b.right
    return compare(a.left, b.left) && compare(a.right, b.right);
}
