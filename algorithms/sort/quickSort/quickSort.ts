export function quickSort(array: number[]): number[] {
    partition(array, 0, array.length);
    return array;
}

function partition(array: number[], start: number, end: number): void {
    const length = end - start;

    if (length <=1)
        return;

    const pivotIndex = start + Math.floor(Math.random() * length);
    [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]];
    

}
