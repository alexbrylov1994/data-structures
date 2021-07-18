// 273. Integer to English Words

// Convert a non-negative integer num to its English words representation.

// Example 1:

// Input: num = 123
// Output: "One Hundred Twenty Three"
// Example 2:

// Input: num = 12345
// Output: "Twelve Thousand Three Hundred Forty Five"
// Example 3:

// Input: num = 1234567
// Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
// Example 4:

// Input: num = 1234567891
// Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"

const ONES = {
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
};

const TEENS = {
    10: 'Ten',
    11: 'Eleven',
    12: 'Twelve',
    13: 'Thirteen',
    14: 'Fourteen',
    15: 'Fifteen',
    16: 'Sixteen',
    17: 'Seventeen',
    18: 'Eighteen',
    19: 'Nineteen'
}

const TENS = {
    2: 'Twenty',
    3: 'Thirty',
    4: 'Forty',
    5: 'Fifty',
    6: 'Sixty',
    7: 'Seventy',
    8: 'Eighty',
    9: 'Ninety'
}

const UNITS = {
    1: 'Hundred',
    2: 'Thousand',
    3: 'Million',
    4: 'Billion'
}

const twoDigits = (num: number): string => {
    if (num < 10)
        return ONES[num];
    else if (num < 20)
        return TEENS[num];
    else {
        let tens = Math.floor(num / 10);
        let rest = num % 10;

        if (rest != 0)
            return TENS[tens] + " " + ONES[rest];
        else
            return TENS[tens];
    }
}

const ThreeDigits = (num: number): string => {
    let hundred = Math.floor(num / 100);
    let rest = num % 100;

    let res = '';

    if (hundred !== 0 && rest !== 0) {
        res = ONES[hundred] + ' Hundred ' + twoDigits(rest);
    } else if ((hundred !== 0) && (rest === 0)) {
        res = ONES[hundred] + ' Hundred';
    } else if ((hundred === 0) && (rest !== 0)) {
        //not 100
        res = twoDigits(rest);
    }

    return res;
}

function numberToWords(num: number): string {
    if (num == 0) {
        return "Zero";
    }

    let billion = Math.floor(num / 1000000000);
    let million = Math.floor((num - billion * 1000000000) / 1000000);
    let thousand = Math.floor((num - billion * 1000000000 - million * 1000000) / 1000);
    let rest = Math.floor(num - billion * 1000000000 - million * 1000000 - thousand * 1000);

    let result = "";
    if (billion > 0)
        result = ThreeDigits(billion) + " Billion";
    if (million > 0) {
        if (result.length > 1)
            result += " ";
        result += ThreeDigits(million) + " Million";
    }
    if (thousand > 0) {
        if (result.length > 1)
            result += " ";
        result += ThreeDigits(thousand) + " Thousand";
    }
    if (rest > 0) {
        if (result.length > 1)
            result += " ";
        result += ThreeDigits(rest);
    }
    return result;
}

// Time complexity : O(N). Intuitively the output is proportional to the number N of digits in the input.
// Space complexity : O(1) since the output is just a string.


// /**
//  * @param {number} num
//  * @return {string}
//  */
//  const UNITS = {
//     0: '',
//     1: 'One',
//     2: 'Two',
//     3: 'Three',
//     4: 'Four',
//     5: 'Five',
//     6: 'Six',
//     7: 'Seven',
//     8: 'Eight',
//     9: 'Nine',
//     10: 'Ten'
// };

// const TEENS = {
//     11: 'Eleven',
//     12: 'Twelve',
//     13: 'Thirteen',
//     14: 'Fourteen',
//     15: 'Fifteen',
//     16: 'Sixteen',
//     17: 'Seventeen',
//     18: 'Eighteen',
//     19: 'Nineteen'
// };

// const TENS = {
//     0: '',
//     1: 'Ten',
//     2: 'Twenty',
//     3: 'Thirty',
//     4: 'Forty',
//     5: 'Fifty',
//     6: 'Sixty',
//     7: 'Seventy',
//     8: 'Eighty',
//     9: 'Ninety'
// };

// const THOUSANDS = {
//     0: '',
//     1: 'Thousand',
//     2: 'Million',
//     3: 'Billion'
// };

// const numberToWords = (num) => {
//     if(num === 0) return 'Zero';

//     let accum = '',
//         position = 0;

//     while(num > 0) {
//         const   thousandth = num % 1000,
//                 numText = threeToText(thousandth, position);

//         accum = accum === '' ? 
//             `${numText}` 
//             : numText === '' ?
//                 accum
//                 : `${numText} ${accum}`;

//         num = Math.floor(num / 1000);
//         position += 1;
//     }

//     return accum;
// };

// const threeToText = (num, position) => {
//     const   tens = num % 100,
//             hundreds = Math.floor(num / 100);

//     const   tensText = tensToText(tens), 
//             hundredsText = hundreds > 0 ? `${UNITS[hundreds]} Hundred` : '';

//     let out = '';

//     out = tensText !== '' && hundredsText !== '' ? 
//         `${hundredsText} ${tensText}`
//         : hundredsText === '' ?
//             tensText
//             : hundredsText;

//     out = position === 0 ? 
//         out 
//         : out === '' ? 
//             ''
//             : `${out} ${THOUSANDS[position]}`;

//     return out;
// };

// const tensToText = (val) => { 
//     if(val <= 10) return UNITS[val];

//     if(val < 20) return TEENS[val]; 

//     const   units = val % 10; 
//             tens = Math.floor(val / 10),
//             tensText = TENS[tens];

//     if(units === 0) return tensText;

//     return `${tensText} ${UNITS[units]}`;
// };