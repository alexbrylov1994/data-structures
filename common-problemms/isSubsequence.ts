
const isSubsequence = (sub: string, sequence: string): boolean => {
    // if 2nd array smaller than first, return 0
    if (!sub) {
        return true;
    }


    if (sequence.length < sub.length) {
        return false;
    }

    let first = 0;
    let second = 0;

    // have 2 pointers, for each string

    // start with the first, if equals to second
    // move first pointer
    // if not move 2nd pointer
    // if first pointer is same as length , we are done

    while (second < sequence.length) {
        if (sub[first] === sequence[second]) {
            first++;
        }
        if (first === sub.length)
            return true

        second++;
    }

    return false;
}