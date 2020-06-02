export function mergeSort(array: number[]): number[] {
    // base case 
    if (array.length <= 1) 
        return array;

    const mid = Math.floor((array.length)/2);
    const left = array.slice(0, mid);
    const right = array.slice(mid, array.length);


    return merge(left,right);
}

function merge(left: number[], right: number[]): number[] {

    return [];
}