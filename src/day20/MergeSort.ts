export default function merge_sort(arr: number[]): void {
    if (arr.length <= 1) {
        return;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    merge_sort(left);
    merge_sort(right);

    let l = 0;
    let r = 0;
    for (let i = 0; i < arr.length; ++i) {
        if (l === left.length) {
            arr[i] = right[r];
            ++r;
        } else if (r === right.length) {
            arr[i] = left[l];
            ++l;
        } else if (right[r] < left[l]) {
            arr[i] = right[r];
            ++r;
        } else {
            arr[i] = left[l];
            ++l;
        }
    }
}
