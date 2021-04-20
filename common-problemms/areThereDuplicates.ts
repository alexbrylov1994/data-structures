//Are There Duplicates
const areThereDuplicates = (...args: string[] | number[]): boolean => {

    let hash = {};

    for (let element of args) {
        if (hash[element] || hash[element] === 0) {
            return true
        } else {
            hash[element] = 1;
        }
    }

    return false;
}