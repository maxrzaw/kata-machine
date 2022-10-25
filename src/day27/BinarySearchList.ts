export default function bs_list(haystack: number[], needle: number): boolean {
    // The range is inclusive at the start and exclusive at the end.
    let left: number = 0;
    let right: number = haystack.length;
    while (left < right) {
        let idx: number = Math.floor(left + (right - left) / 2);
        console.log(left, right, idx, needle, haystack);
        if (haystack[idx] < needle) {
            left = idx + 1;
        } else if (haystack[idx] > needle) {
            right = idx;
        } else {
            return true;
        }
    }

    return false;
}