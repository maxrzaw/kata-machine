// Always use the last element as pivot.
// use [] for the range.
// return the index of the partition.
function partition(start: number, end: number, arr: number[]): number {
    const pivot: number = arr[end];
    let index = start;

    for (let i = start; i < end; ++i) {
        if (arr[i] < pivot) {
            swap(arr, index, i);
            index++;
        }
    }

    swap(arr, index, end);
    return index;
}

function swap(arr: number[], a: number, b: number): void {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function sort_recursive(start: number, end: number, arr: number[]): void {
    if (start >= end) {
        return;
    }

    // Partition
    const pivot = partition(start, end, arr);

    // left side
    sort_recursive(start, pivot - 1, arr);

    // right side
    sort_recursive(pivot + 1, end, arr);
}

export default function quick_sort(arr: number[]): void {
    sort_recursive(0, arr.length - 1, arr);
}
