export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; ++i) {
        let dirty: boolean = false;
        for (let j = 0; j < arr.length - i - 1; ++j) {
            if (arr[j] > arr[j+1]) {
                dirty = true;
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        if (!dirty) {
            break;
        }
    }
}
