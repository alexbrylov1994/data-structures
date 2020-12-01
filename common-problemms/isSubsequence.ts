
const isSubsequence = (sub: string, sequence: string): boolean => {
    // if 2nd array smaller than first, return 0
    if (!sub) {
        return true;
    }

    // is sequence is shorter than sub string, it can't be true
    if (sequence.length < sub.length) {
        return false;
    }

    // have 2 pointers, for each string

    // start with the first, if equals to second
    // move first pointer
    // if not move 2nd pointer
    // if first pointer is same as length , we are done

    let firstWordPointer = 0;
    let secondWordPointer = 0;

    while (secondWordPointer < sequence.length) {
        if (sub[firstWordPointer] === sequence[secondWordPointer]) {
            firstWordPointer++
        }

        if (firstWordPointer === sub.length) {
            return true;
        }

        secondWordPointer++
    }

    return false;
}