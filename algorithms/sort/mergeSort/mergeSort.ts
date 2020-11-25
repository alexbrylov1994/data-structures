export function mergeSort(array: number[]): number[] {
    // base case 
    if (array.length <= 1)
        return array;

    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid, array.length);
    console.log('before merge:', left,right);
    return merge(mergeSort(left), mergeSort(right));
}

const merge = (left: number[], right: number[]): number[] => {
    const array = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length) {
        let leftElement = left[leftIndex];
        let rightElement = right[rightIndex];
        console.log( 'leftIndex', leftIndex);
        console.log( 'rightIndex', rightIndex);
        if (!leftElement) {
            array.push(rightElement);
            rightIndex++;
        } else if (!rightElement) {
            array.push(leftElement);
            leftIndex++;
        } else if (leftElement < rightElement) {
            array.push(leftElement);
            leftIndex++;
        } else {
            array.push(rightElement);
            rightIndex++;
        }

    }
    console.log('merging',left,right)
    console.log('result', array);
    return array;
}