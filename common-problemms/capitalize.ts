const capitalize = (str: string): string => {
    // split  on space ' ', 
    // itterate over new array, for each subarray pick 1st element and capitalize it
    // join ' '

    let arr: string[] = str.split(' ');
    let words: string[] = [];

    for (let el of arr) {
        words.push(el[0] + el.slice(1));
    }

    return words.join(' ');

}

console.log(capitalize('look, it is working'));