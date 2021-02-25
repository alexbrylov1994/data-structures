import { strict } from "assert";

const reverse = (str: string): string => {
    const reverseArr = [];

    for (let i = str.length - 1; i >= 0; i--) {
        reverseArr.push(str[i]);
    }

    return reverseArr.join('');
}

reverse('1234');
