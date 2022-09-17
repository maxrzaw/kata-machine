export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; ++i) {
        let flip: boolean = false;
        for (let j = 0; j < arr.length - 1 - i; ++j) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                flip = true;
            }
        }
        if (flip === false) {
            break;
        }
    }
}
