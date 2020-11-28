const countUniqueValue = (array: number[]): number => {
    let start = 0;
    let next = start + 1;

    // if empty -> 0
    if (!array.length) {
        return 0;
    }

    while (next < array.length) {
        if (array[start] !== array[next]) {
            start++;
            array[start] = array[next]
        } else {
            next++
        }
    }

    return start + 1;
}