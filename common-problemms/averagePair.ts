//Average Pair
const averagePair = (arr: [], target: number): boolean => {
    // if no array -> return false 

    // have pointers at the start and end
    // add the numbers
    // if number bigger than target, move end pointer left
    // if number is smaller than target, start pointer right


    if (arr.length < 2) {
        return false;
    }

    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let average = (arr[start] + arr[end]) / 2;

        if (average === target) {
            return true;
        } else if (average < target) {
            start++
        } else if (average > target) {
            end--;
        }
    }

    return false;
}