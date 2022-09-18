export default function insertion_sort(arr: number[]): void {
    let i: number = 1;
    let j: number = 1;
    let key: number = 0;
    for (; i < arr.length; ++i) {
        key = arr[i];
        j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            --j;
        }
        arr[j+1] = key;
    }
}
