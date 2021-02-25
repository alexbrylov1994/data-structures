import { strict } from "assert";

const reverse = (str: string): string => {
    const arr = str.split('');
    const reverseArr = [];

    arr.forEach((el: string) => {
        reverseArr.unshift(el);
    });

    return reverseArr.join('');
}
