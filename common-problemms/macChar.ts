const maxChar = (str: string): string => {
    // itterate over string
    // add to hash, set to 1 if doesn't exist, else ++
    // iterate over object, return max one
    const hash = {};
    for (let char of str) {
        console.log(char);
        if (hash[char]) {
            hash[char]++
        } else {
            hash[char] = 1;
        }
    }

    let maxChar;
    let max = 0
    for (let key in hash) {
        if (hash[key] > max) {
            max = hash[key];
            maxChar = key;
        }
    }
    return maxChar;
}
