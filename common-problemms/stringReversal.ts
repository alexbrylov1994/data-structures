const reverse = (str: string): string => {
    const reverseArr = [];

    for (let i = str.length - 1; i >= 0; i--) {
        reverseArr.push(str[i]);
    }

    return reverseArr.join('');

    // let reverse = '';
    // for (let char of str) {
    //     reverse = char + reverse;
    // }

    // return reverse;
}

console.log(reverse('1234'));
