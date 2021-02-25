const recuring = (arr: number[] | string): number | string => {
    const hashmap = {}

    for (let el of arr) {
        if (hashmap[el]) {
            return el;
        } else {
            hashmap[el] = 1;
        }
    }

    return null;
}
