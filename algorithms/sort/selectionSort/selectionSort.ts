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
    const first = arr[i2];    
    const second = arr[i1];
    
    arr[i1]=first;
    arr[i2]=second;
}