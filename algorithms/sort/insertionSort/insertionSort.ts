export function insertionSort(array: number[]): number[] {
    for(let i=0; i < array.length; i++) {
        for(let cur=i; cur >= 0; cur--) {
            if (array[cur] < array[cur-1]) {
                swap(array, cur-1, cur);
            } else {
                break;
            }
        }
    }
    return array;
}

const swap = (arr: number[], i1, i2): void => {
    // const first = arr[i2];    
    // const second = arr[i1];
    
    // arr[i1]=first;
    // arr[i2]=second;
    [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
}