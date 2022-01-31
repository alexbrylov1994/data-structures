const reverseInt = (num: number): number => {
    // convert to string
    // check if first element is '-' then negative
    // itterate string backwards 
    // add `-` if needed
    // to number
    // retunr num

    let reversedStr = num.toString().split('').reverse().join();
    // parseInt will return number even if string has charachters or 5-
    let reversedNum: number
    num < 0 ? reversedNum = parseInt(reversedStr) : reversedNum = parseInt(reversedStr) * -1
    return reversedNum;
}

console.log(reverseInt(-23));