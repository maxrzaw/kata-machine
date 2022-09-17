export default function bs_list(haystack: number[], needle: number): boolean {
    let left: number = 0;
    let right: number = haystack.length;
    let middle: number = 0;

    do {
        middle = Math.floor(left + (right - left) / 2);
        if (haystack[middle] === needle) {
            return true;
        }
        if (needle > haystack[middle]) {
            left = middle + 1;
        }
        else {
            right = middle;
        }
    } while (left < right);
    
    return false;
}
