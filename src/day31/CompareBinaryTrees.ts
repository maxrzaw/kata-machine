export default function compare(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
    if (a === null && b === null) {
        return true;
    }
    // since they are not both null, if one is, then they are not equal
    if (a === null || b === null) {
        return false;
    }

    if (a.value !== b.value) {
        return false;
    }

    return compare(a.left, b.left) && compare(a.right, b.right);
}
