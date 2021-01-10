export function selectionSort(array: number[]): number[] {
    for(let i=0; i < array.length; i++) {
        let min = i;
        for(let next=i+1; next < array.length; next++) {
            if (array[next] < array[min]) {
                min = next
            }
        }
        swap(array, i, min);
    }
    return array;
}

const swap = (arr: number[], i1, i2): void => {
    [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
}