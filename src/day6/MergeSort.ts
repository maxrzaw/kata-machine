function merge_sort_recursive(arr: number[]): void {
    if (arr.length <= 1) {
        return;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    merge_sort_recursive(left);
    merge_sort_recursive(right);

    // merge them together

    let l = 0;
    let r = 0;
    for (let i = 0; i < arr.length; ++i) {
        let lv: number | undefined = undefined;
        let rv: number | undefined = undefined;
        if (l < left.length) {
            lv = left[l];
        }
        if (r < right.length) {
            rv = right[r];
        }

        if (lv === undefined) {
            arr[i] = rv as number;
            r++;
        } else if (rv === undefined) {
            arr[i] = lv as number;
            l++;
        } else if (lv < rv) {
            arr[i] = lv as number;
            l++;
        }
        else {
            arr[i] = rv as number;
            r++;
        }
    }
}

export default function merge_sort(arr: number[]): void {
    merge_sort_recursive(arr);
}
