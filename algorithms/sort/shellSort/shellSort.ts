export function shellSort(array: number[]): number[] {

    let gap = Math.floor(array.length / 2);

    while (gap > 0) {
        for (let i = gap; i < array.length; i++) {
            for (let cur = i; cur > 0; cur-= gap) {
                if (array[cur] < array[cur - gap]) {
                    swap(array, cur - 1, cur);
                } else {
                    break;
                }
            }
        }
        gap = Math.floor(gap/2);
    }
    return array;
}

const swap = (arr: number[], i1, i2): void => {
    const first = arr[i2];
    const second = arr[i1];

    arr[i1] = first;
    arr[i2] = second;
}