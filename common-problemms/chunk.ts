// divide sub array into subarrays
const chunk = (array: number[], size: number): number[][] => {
    // itterate over the array
    // have counter which increases 
    let newArr = [];
    let subArray = [];
    let counter = 0;
    // itterate add to subarray 
    // when counter reaches the number:
    // push sub array to new array
    // clear sub array and counter set to 0
    for (let el of array) {
        if (counter === size) {
            console.log('sub', subArray);
            newArr.push(subArray);
            counter = 0;
            subArray = [];
        }

        subArray.push(el);
        counter++;
    }
    console.log(newArr);

    // if counter not 0, add subarray to array, and return it
    if (counter > 0) {
        newArr.push(subArray);
    }

    return newArr;
}

console.log(chunk([1, 2, 3, 4, 5], 2));