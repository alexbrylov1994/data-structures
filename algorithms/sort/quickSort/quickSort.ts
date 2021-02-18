export const quickSort = (array: number[]): number[] => {
    quickSortRecursive(array, 0, array.length);
    return array;
}

const quickSortRecursive = (array: number[], left: number, right: number): void => {
    if (left >= right) {
        return;
    }

    const pivot = array[(left + right) / 2]; // center , can be start 
    const index = partition(array, left, right, pivot);
    quickSortRecursive(array, left, index - 1);
    quickSortRecursive(array, index, right);
}

const partition = (array: number[], left: number, right: number, pivot: number): number => {
    while (left <= right) {
        while (array[left] < pivot) {
            left++;
        } 

        while (array[right] > pivot) {
            right--;
        }

        if (left <= right) {
            //swap 
            [array[left], array[right]] = [array[right], array[left]];
            left++;
            right--;
        }
    }

    return left; // diving point between left and right
}