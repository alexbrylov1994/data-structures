function solution(N, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let digits = N.toString().split('');
    let count = K;
    for (let i = 0; i < digits.length; i++) {
        let digit = parseInt(digits[i])
        while (digit != 9 && count > 0) {
            digit++;
            count--;
        }

        digits[i] = toString(digit);
    }

    let newNum = parseInt(digits.join(''));

    return newNum;
}

console.log(solution(512, 10));