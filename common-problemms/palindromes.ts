// palindrom are strings that form the same word if reversed
const palindrom = (str: string): boolean => {
    // make a copy of input
    // reverse it and see if equals to the original one
    let revesed: string = '';

    for (let char of str) {
        revesed = char + revesed;
    }

    return revesed === str;
}

console.log(palindrom('abba'));