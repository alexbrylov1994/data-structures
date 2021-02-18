export const quickSort = (array: number[]): number[] => {
    partition(array, 0, array.length);
    return array;
}

const partition = (array: number[], left: number, right: number): void => {
    const length = right - left;

    /** Terminate the recursion */
    if (length <= 1) return;

    /** Randomly select a pivot and move it to the head of the array */
    const pivotIndex = left + Math.floor(Math.random() * length);
    [array[left], array[pivotIndex]] = [array[pivotIndex], array[left]];

    /** The first element is our pivot */
    const pivot = array[left];
    let pivotRank = left;

    /** Loop through all the elements, partitioning around the pivot */
    for (let index = left + 1; index < right; index++) {
        if (array[index] < pivot) {
            pivotRank++;
            [array[index], array[pivotRank]] = [array[pivotRank], array[index]];
        }
    }

    /** Finally put the pivot at its rightfull place */
    if (pivotRank !== left) {
        [array[pivotRank], array[left]] = [array[left], array[pivotRank]];
    }

    /** Partition all the elements less than the pivot */
    partition(array, left, pivotRank);

    /** Partition all the elements more than the pivot */
    partition(array, pivotRank + 1, right);
}
