// divide sub array into subarrays
const chunk = (array: number[], size: number): number[][] => {
    // itterate over the array
    let newArr = [];
    let chunk = [];
    // itterate add to subarray 
    // when chunk length === number:
    // push sub array to new array
    // clear chunk
    for (let el of array) {
        if (chunk.length === size) {
            newArr.push(chunk);
            chunk = [];
        }

        chunk.push(el);
    }

    // chunk size isn't 0, add subarray to array, and return it
    if (chunk.length > 0) {
        newArr.push(chunk);
    }

    return newArr;
}

console.log(chunk([1, 2, 3, 4, 5], 2));