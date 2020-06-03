export function mergeSort(array: number[]): number[] {
    // base case 
    if (array.length <= 1)
        return array;

    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid, array.length);
    
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
    const array = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length || rightIndex < right.length) {
        let leftElement = left[leftIndex];
        let rightElement = right[rightIndex];

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
    console.log(left,right)
    console.log('result', array);
    return array;
}