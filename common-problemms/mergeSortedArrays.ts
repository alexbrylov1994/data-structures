// Merge Sorted Arrays
const merge = (left: number[], right: number[]): number[] => {
    let array = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        let leftElement = left[leftIndex];
        let rightElement = right[rightIndex];

        if (leftElement < rightElement) {
            array.push(leftElement);
            leftIndex++;
        } else {
            array.push(rightElement);
            rightIndex++;
        }
    }

    while (leftIndex < left.length) {
        array.push(left[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < right.length) {
        array.push(right[rightIndex]);
        rightIndex++;
    }

    return array;
}

