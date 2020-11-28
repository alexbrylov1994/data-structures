const countUniqueValue = (array: number[]): number => {
    let current = 0;
    let next = current + 1;

    // if empty -> 0
    if (!array.length) {
        return 0;
    }

    let count = 1; // since we must have at least 1 unique
    // and in case we have 1 element logic won't work
    // and when we have current at the end of an array, next is undefined and it's a unique value
    // when 2+ elements
    while (next < array.length) {
        if (array[current] !== array[next]) {
            count++;
            current = next;
            next++;
        } else {
            next++;
        }
    }

    return count;
}