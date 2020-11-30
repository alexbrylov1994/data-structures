const sameFrequency = (int1: number, int2: number): boolean => {
    // convert numbers to strings
    // if the lenght not the same, same frequency not possible, return null

    //go over first array, add it to table
    // if element exists, increase by 1
    // if not, set it to 1


    // go over 2nd number
    // if element doesn't exist, return null
    // if exists, decrease by 1
    // if exists and 0, return null since if we decreae by one, frequency if off

    const number1 = int1.toString().split('');
    const number2 = int2.toString().split('');

    if (number1.length !== number2.length)
        return false;

    const hash = {};

    for (let num of number1) {
        if (!hash[num]) {
            hash[num] = 1;
        } else {
            hash[num]++;
        }
    }

    for (let num of number2) {
        if (hash[num]) {
            hash[num]--
        } else {
            return false;
        }
    }


    return true;
}
